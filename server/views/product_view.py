import random

from rest_framework.viewsets import ViewSet, ModelViewSet
from rest_framework.response import Response
from rest_framework import status

from rest_framework_simplejwt.authentication import JWTAuthentication

from server.models import Product
from server.exception import DATA_DELETION_FAILED
from server.mixins import ProductMixin


class ProductViewSet(ViewSet):
    lookup_field = "slug"
    mixin = ProductMixin(Product)
    # permission_classes = [IsSubscriberOrOwnerEditOrReadOnly]
    authentication_classes = [JWTAuthentication]

    def list(self, request):
        (serializer, paginator) = self.mixin.findProductAll(
            view=self,
            request=request
        )

        if(paginator):
            return paginator.get_paginated_response(serializer.data);
        else:
            return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, slug=None):
        try:
            serializer = self.mixin.findProductBySlug(request=request, slug=slug)
        except ValueError as EXCEPTION:
            return Response(
                {"message": str(EXCEPTION)},
                status=status.HTTP_404_NOT_FOUND
            )
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        try:
            serializer = self.mixin.createProduct(request=request)
        except ValueError as EXCEPTION:
            return Response(
                {"message": str(EXCEPTION)},
                status=status.HTTP_404_NOT_FOUND
            )
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
        try:
            serializer = self.mixin.updateProduct(request, slug)
        except ValueError as EXCEPTION:
            return Response(
                {"message": str(EXCEPTION)},
                status=status.HTTP_404_NOT_FOUND
            )
        headers = self.get_success_headers(
            f'/api/v1/products/{serializer.data.get("id")
                if (serializer.data.get("id", None) is not None)
                else ""
            }'
        )

        return Response(
            serializer.data,
            status=status.HTTP_200_OK,
            headers={
                **headers,
                "Content-type": "application/json"
            }
        )

    def delete(self, request, slug=None):
        try:
            isDeleted = self.mixin.deleteProduct(slug)
        except ValueError as EXCEPTION:
            return Response(
                {"message": str(EXCEPTION)},
                status=status.HTTP_404_NOT_FOUND
            )

        if isDeleted:
            return Response(
                {"message": "Product deleted success"},
                status=status.HTTP_200_OK
            )
        else:
            return Response(
                {"message": DATA_DELETION_FAILED},
                status=status.HTTP_404_NOT_FOUND
            )


    def get_success_headers(self, location):
        try:
            return {'Location': str(location)}
        except (TypeError, KeyError):
            return {}
