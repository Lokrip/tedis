from server.models import Product
from server.pagination import ProductResultsSetPagination
from server.serializers.product_serializers import ProductListSerializer

def get_product_list(**kwargs):
    request = kwargs.get("request")
    view = kwargs.get("view")

    queryset = Product.objects.order_by(
        "-created_at"
    ).select_related(
        "category"
    ).prefetch_related(
        "user"
    )

    if not queryset.exists():
        return ProductListSerializer([], many=True), ProductResultsSetPagination()

    paginator = ProductResultsSetPagination()
    paginated_product = paginator.paginate_queryset(
        queryset,
        request,
        view=view
    ) or queryset
    serializer = ProductListSerializer(paginated_product, many=True)
    return serializer, paginator
