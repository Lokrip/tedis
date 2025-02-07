from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from server.serializers.product_serializers import ProductSerializer

from server.models import Product

class ProductViewSet(ViewSet):
    serializer_class = ProductSerializer

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
