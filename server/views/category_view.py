from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from server.models import Category
from server.serializers.category_serializers import CategorySerializer
from server.mixins import CategoryMixin
from server.exception import DATA_DELETION_FAILED


class CategoryViewSet(ViewSet):
    lookup_field = "slug"
    mixin = CategoryMixin(Category)

    def list(self, request):
        serializer = self.mixin.findCategoryAll()
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        try:
            serializer = self.mixin.createCategory(request)
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
            serializer = self.mixin.updateCategory(request, slug)
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

    def destroy(self, request, slug=None):
        try:
            isDeleted = self.mixin.deleteCategory(slug)
        except ValueError as EXCEPTION:
            return Response(
                {"message": str(EXCEPTION)},
                status=status.HTTP_404_NOT_FOUND
            )
        if isDeleted:
            return Response(
                {"message": "Categories deleted success"},
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
