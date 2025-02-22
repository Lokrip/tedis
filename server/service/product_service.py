from server.models import Product
from server.pagination import ProductResultsSetPagination
from server.serializers.product_serializers import ProductListSerializer


def product_filters(query_params, queryset):
    if not query_params and not isinstance(query_params, dict):
        raise ValueError("query params must")

    filters = {
        key: value
        for key, value in query_params.items()
        if value is not None
    }

    query = query_params.get("q")

    if query is not None:
        queryset = queryset.filter(title__icontains=query)
        filters.pop("q", None)

    return queryset.filter(**filters)

def get_product_list(**kwargs):
    request = kwargs.get("request", None)
    view = kwargs.get("view")
    query_params = request.query_params

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

    queryset = product_filters(query_params=query_params, queryset=queryset)

    paginator = ProductResultsSetPagination()
    paginated_product = paginator.paginate_queryset(
        queryset,
        request,
        view=view
    ) or queryset

    serializer = ProductListSerializer(paginated_product, many=True)
    return serializer, paginator
