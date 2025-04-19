from django.db.models import Prefetch

from server.models import (
    Product,
    ProductImage
)
from server.pagination import ProductResultsSetPagination
from server.serializers.product_serializers import (
    ProductListSerializer,
    ProductDetailSerializer,
    ProductCreateSerializer,
    ProductUpdateSerializer
)
from server.core.utils.perform import PerformBase
from server.filters import ProductFilter


def product_filters(request=None, queryset=None, query_params=None):
    filter_result = ProductFilter(
        query_params,
        queryset=queryset
    )
    return filter_result.qs


class ProductService(PerformBase):

    def get_product_list(self, **kwargs):
        request = self.get_request(kwargs)
        view = kwargs.get("view")
        if view is None:
            raise ValueError("view not found!")
        query_params = self.get_query_params(request=request)
        queryset = Product.objects.order_by(
            "-created_at"
        ).select_related(
            "category"
        ).prefetch_related(
            "user",
            Prefetch(
                "images",
                queryset=ProductImage.objects.all()
            ),
            Prefetch(
                "images",
                queryset=ProductImage.objects.filter(is_main=True),
                to_attr="main_images"
            )
        )
        queryset = product_filters(
            request=request,
            queryset=queryset,
            query_params=query_params
        )
        if not queryset.exists():
            return ProductListSerializer([], many=True), None
        paginator = ProductResultsSetPagination()
        paginated_product = paginator.paginate_queryset(
            queryset,
            request,
            view=view
        ) or queryset
        serializer = ProductListSerializer(
            paginated_product,
            many=True,
            context={
                "request": request
            }
        )
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
