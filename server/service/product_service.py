from server.models import Product
from server.pagination import ProductResultsSetPagination
from server.serializers.product_serializers import (
    ProductListSerializer,
    ProductDetailSerializer,
    ProductCreateSerializer,
    ProductUpdateSerializer
)
from server.exception import (
    RESOURCE_NOT_FOUND,
    DATA_NOT_FOUND,
    CREATION_FAILED
)
def product_filters(self, search_query, queryset):
    if not search_query:
        raise ValueError("query params must")
    if search_query is not None:
        queryset = queryset.filter(title__icontains=search_query)
    return queryset

class ProductService:

    def get_product_list(self, **kwargs):
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


    def get_product_detail(self, **kwargs):
        request = kwargs.get("request", None)
        slug = kwargs.get("slug", None)

        if request is None:
            raise ValueError("request not found!")
        if slug is None:
            raise ValueError(RESOURCE_NOT_FOUND)
        try:
            product = Product.objects.get(slug=slug)
        except Product.DoesNotExist:
            raise ValueError(RESOURCE_NOT_FOUND)

        serializer = ProductDetailSerializer(product, context={"request": request})
        return serializer

    def product_create(self, **kwargs):
        request = kwargs.get("request", None)
        data = request.data

        if data is None:
            raise ValueError(DATA_NOT_FOUND)

        if request is None:
            raise ValueError("request not found!")

        serializer = ProductCreateSerializer(data=data, context={"request": request})

        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer=serializer)
        return serializer

    def product_update(self, **kwargs):
        request = kwargs.get("request", None)
        slug = kwargs.get("slug", None)

        data = request.data

        if request is None:
            raise ValueError("request not found!")
        if slug is None:
            raise ValueError(RESOURCE_NOT_FOUND)

        if slug is None or data is None:
            message = (
                DATA_NOT_FOUND
                if data is None
                else CREATION_FAILED)
            raise ValueError(message)

        try:
            product = Product.objects.get(slug=slug)
        except (Product.DoesNotExist):
            raise ValueError(RESOURCE_NOT_FOUND)

        if data.get("user_id", None) is None or not data.get("user_id", None):
            data['user_id'] = product.user.pk

        if data.get("slug", None) is None or not data.get("slug", None):
            data['slug'] = product.slug

        serializer = ProductUpdateSerializer(instance=product, data=data)

        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer=serializer)
        return serializer
    def product_delete(self, **kwargs):
        slug = kwargs.get("slug", None)

        if slug is None:
            raise ValueError(RESOURCE_NOT_FOUND)

        try:
            product = Product.objects.get(slug=slug)
        except (Product.DoesNotExist):
            raise ValueError(RESOURCE_NOT_FOUND)

        self.perform_destroy(instance=product)
        return True

    def perform_destroy(self, instance):
        instance.delete()

    def perform_create(self, serializer):
        serializer.save()

    def perform_update(self, serializer):
        serializer.save()
