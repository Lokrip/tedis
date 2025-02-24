from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.authentication import JWTAuthentication

from server.serializers.product_serializers import (
    ProductDetailSerializer,
    ProductCreateSerializer,
    ProductUpdateSerializer
)
from server.permissions.product_permissions import IsSubscriberOrOwnerEditOrReadOnly
from server.models import Product
from server.exeption import (
    DATA_NOT_FOUND,
    RESOURCE_NOT_FOUND,
    CREATION_FAILED
)
from server.mixins import ProductMixin


class ProductViewSet(ViewSet):
    lookup_field = "slug"
    mixin = ProductMixin(Product)
    permission_classes = [IsSubscriberOrOwnerEditOrReadOnly]
    authentication_classes = [JWTAuthentication]

    def list(self, request):
        (serializer, paginator) = self.mixin.findProductAll(
            view=self,
            request=request
        )
        return paginator.get_paginated_response(serializer.data);

    def retrieve(self, request, slug=None):
        if slug is None:
            return Response(
                {"message": DATA_NOT_FOUND},
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            product = self.mixin.findBySlug(slug=slug, isSlugify=False)
        except Product.DoesNotExist:
            return Response(
                {"message": RESOURCE_NOT_FOUND},
                status=status.HTTP_404_NOT_FOUND
            )

        serializer = ProductDetailSerializer(product, context={"request": request})
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
            f'/api/v1/products/{serializer.data.get("id")
                if (serializer.data.get("id", None) is not None)
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

    def update(self, request, slug=None):
        data = request.data or None

        if slug is None or data is None:
            message = (
                DATA_NOT_FOUND
                if data is None
                else CREATION_FAILED)
            return Response(
                {"message": message},
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            product = self.mixin.findBySlug(slug=slug, isSlugify=False)
        except (Product.DoesNotExist):
            return Response(
                {"message": RESOURCE_NOT_FOUND},
                status=status.HTTP_404_NOT_FOUND
            )

        if data.get("user_id", None) is None or not data.get("user_id", None):
            data['user_id'] = product.user.pk
        if data.get("slug", None) is None or not data.get("slug", None):
            data['slug'] = product.slug

        serializer = ProductUpdateSerializer(instance=product, data=data)

        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer=serializer)

        headers = self.get_success_headers(
            f'/api/v1/products/{serializer.data.get("id")
                if (serializer.data.get("id", None) is not None)
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

    def delete(self, request, slug=None):
        if slug is None:
            return Response(
                {"message": DATA_NOT_FOUND},
                status=status.HTTP_404_NOT_FOUND
            )

        try:
            product = self.mixin.findBySlug(slug=slug, isSlugify=False)
        except (Product.DoesNotExist):
            return Response(
                {"message": RESOURCE_NOT_FOUND},
                status=status.HTTP_404_NOT_FOUND
            )

        product.delete()
        return Response(
            {"message": "Product deleted success"},
            status=status.HTTP_200_OK
        )

    def perform_create(self, serializer):
        serializer.save()

    def perform_update(self, serializer):
        serializer.save()

    def get_success_headers(self, location):
        try:
            return {'Location': str(location)}
        except (TypeError, KeyError):
            return {}
