from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from server.serializers.product_serializers import ProductSerializer

from server.models import Product

from server.exeption import (
    DATA_NOT_FOUND,
    RESOURCE_NOT_FOUND
)

class ProductViewSet(ViewSet):
    serializer_class = ProductSerializer
    lookup_field = "slug"

    def list(self, request):
        queryset = Product.objects.order_by(
            "-created_at"
        ).select_related(
            "category"
        ).prefetch_related(
            "user"
        )

        serializer = self.serializer_class(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

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

        serializer = ProductSerializer(product)
        return Response(serializer.data, status=status.HTTP_200_OK,)
