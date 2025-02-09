from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from server.serializers.product_serializers import (
    ProductDetailSerializer
)
from server.service.product_service import get_product_list
from server.models import Product
from server.exeption import (
    DATA_NOT_FOUND,
    RESOURCE_NOT_FOUND
)


class ProductViewSet(ViewSet):
    lookup_field = "slug"

    def list(self, request):
        (serializer, paginator) = get_product_list(
            view=self,
            request=request
        )
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
