from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework.pagination import PageNumberPagination
from rest_framework import status

from server.serializers.product_serializers import (
    ProductListSerializer,
    ProductDetailSerializer
)

from server.models import Product

from server.exeption import (
    DATA_NOT_FOUND,
    RESOURCE_NOT_FOUND
)

class ProductResultsSetPagination(PageNumberPagination):
    page_size = 18
    page_size_query_param = "page_size"
    max_page_size = 10000

class ProductViewSet(ViewSet):
    lookup_field = "slug"

    def list(self, request):
        queryset = Product.objects.order_by(
            "-created_at"
        ).select_related(
            "category"
        ).prefetch_related(
            "user"
        )

        paginator = ProductResultsSetPagination()

        paginated_product = paginator.paginate_queryset(
            queryset,
            request,
            view=self
        )

        serializer = ProductListSerializer(paginated_product, many=True)
        return paginator.get_paginated_response(serializer.data);

    def retrieve(self, request, *args, **kwargs):
        slug = kwargs.get("slug", None)

        if (slug is None):
            return Response(
                {"message": DATA_NOT_FOUND},
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            product = Product.objects.get(slug=slug)
        except Product.DoesNotExist:
            return Response(
                {"message": RESOURCE_NOT_FOUND},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = ProductDetailSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK,)
