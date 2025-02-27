from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from server.models import Category
from server.serializers.category_serializers import CategorySerializer

class CategoryViewSet(ViewSet):
    def list(self, request):
        queryset = Category.objects.all()
        serializer = CategorySerializer(queryset, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)
