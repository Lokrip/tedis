from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from server.serializers.product_serializers import (
    ProductDetailSerializer,
    ProductCreateSerializer
)
from server.permissions.product_permissions import IsSubscriberOrOwnerEditOrReadOnly
from server.service.product_service import get_product_list
from server.models import Product
from server.exeption import (
    DATA_NOT_FOUND,
    RESOURCE_NOT_FOUND,
    CREATION_FAILED
)


class ProductViewSet(ViewSet):
    lookup_field = "slug"
    permission_classes = [IsSubscriberOrOwnerEditOrReadOnly]

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

    def create(self, request):
        data = request.data or None
        if(data is None):
            return Response(
                {"message": CREATION_FAILED},
                status=status.HTTP_404_NOT_FOUND
            )
        serializer = ProductCreateSerializer(data=data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer=serializer)
        headers = self.get_success_headers(
            f'/api/v1/products/{request.data.get("id")
                if (request.data.get("id", None) is not None)
                else ""
            }'
        )
        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED,
            headers={
                **headers,
                "Content-type": "application/json"
            }
        )

    def perform_create(self, serializer):
        serializer.save()

    def get_success_headers(self, location):
        try:
            return {'Location': str(location)}
        except (TypeError, KeyError):
            return {}
