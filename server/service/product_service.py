from server.models import Product
from server.pagination import ProductResultsSetPagination
from server.serializers.product_serializers import ProductListSerializer


def product_filters(search_query, queryset):
    if not search_query:
        raise ValueError("query params must")
    if search_query is not None:
        queryset = queryset.filter(title__icontains=search_query)
    return queryset

def get_product_list(**kwargs):
    request = kwargs.get("request", None)
    view = kwargs.get("view")
    query_params = request.query_params

    search_query = query_params.get("q", None)

    if request is None:
        raise ValueError("request not found!")

    if view is None:
        raise ValueError("view not found!")

    queryset = Product.objects.order_by(
        "-created_at"
    ).select_related(
        "category"
    ).prefetch_related(
        "user"
    )

    if not queryset.exists():
        return ProductListSerializer([], many=True), ProductResultsSetPagination()

    if search_query is not None:
        queryset = product_filters(search_query=search_query, queryset=queryset)

    paginator = ProductResultsSetPagination()
    paginated_product = paginator.paginate_queryset(
        queryset,
        request,
        view=view
    ) or queryset

    serializer = ProductListSerializer(paginated_product, many=True)
    return serializer, paginator
