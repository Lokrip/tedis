from rest_framework import serializers

from server.models import Category

from .utils_serializers import RecursiveSerializer

class FilterParentCategorySerializer(serializers.ListSerializer):
    def to_representation(self, data):
        data = data.filter(parent=None)
        return super().to_representation(data)


class CategorySerializer(serializers.ModelSerializer):
    children = RecursiveSerializer(many=True)

    class Meta:
        list_serializer_class = FilterParentCategorySerializer
        model = Category
        fields = ("id", "title", "metaTitle",
                  "slug", "children")
