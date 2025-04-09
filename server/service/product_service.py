from server.models import Product
from server.pagination import ProductResultsSetPagination
from server.serializers.product_serializers import (
    ProductListSerializer,
    ProductDetailSerializer,
    ProductCreateSerializer,
    ProductUpdateSerializer
)
from server.core.utils.perform import PerformBase


def product_filters(search_query, queryset):
    if not search_query:
        raise ValueError("query params must")
    if search_query is not None:
        queryset = queryset.filter(title__icontains=search_query)
    return queryset


class ProductService(PerformBase):

    def get_product_list(self, **kwargs):
        request = self.get_request(kwargs)
        view = kwargs.get("view")
        if view is None:
            raise ValueError("view not found!")
        query_params = self.get_query_params(request=request)
        search_query = query_params.get("q", None)
        category_slug = query_params.get("category", None)
        queryset = Product.objects.order_by(
            "-created_at"
        ).select_related(
            "category"
        ).prefetch_related(
            "user"
        )
        if category_slug:
            queryset = queryset.filter(category__slug=category_slug)
        if not queryset.exists():
            return ProductListSerializer([], many=True), None
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
        request = self.get_request(kwargs)
        slug = self.get_slug(kwargs)
        product = self.get_object_or_error(Product, slug=slug)
        serializer = ProductDetailSerializer(product, context={"request": request})
        return serializer

    def product_create(self, **kwargs):
        request = self.get_request(kwargs)
        data = self.get_data(request=request)
        serializer = ProductCreateSerializer(data=data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        self.perform_create(instance=serializer)
        return serializer

    def product_update(self, **kwargs):
        request = self.get_request(kwargs)
        slug = self.get_slug(kwargs)
        data = self.get_data(request=request)
        product = self.get_object_or_error(Product, slug=slug)
        serializer = ProductUpdateSerializer(instance=product, data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(instance=serializer)
        return serializer

    def product_delete(self, **kwargs):
        slug = self.get_slug(kwargs)
        product = self.get_object_or_error(Product, slug=slug)
        self.perform_destroy(instance=product)
        return True
