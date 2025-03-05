from rest_framework import serializers

from server.models import Category

from .utils_serializers import RecursiveSerializer

class FilterParentCategorySerializer(serializers.ListSerializer):
    def to_representation(self, data):
        data = data.filter(parent=None)
        return super().to_representation(data)

class CategorySerializerFieldsAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = "__all__"

class CategorySerializer(serializers.ModelSerializer):
    children = RecursiveSerializer(many=True)

    class Meta:
        list_serializer_class = FilterParentCategorySerializer
        model = Category
        fields = ("id", "title", "metaTitle",
                  "slug", "children")

class CategoryBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = (
            'id', 'title', "slug",
            'parent', 'metaTitle',
            'created_at'
        )
        extra_kwargs = {
            'id': {
               'read_only': True
            },
            'slug': {
                "read_only": True
            },
            'created_at': {
                "read_only": True
            }
        }

class CategoryCreateSerializer(CategoryBaseSerializer):
    pass


class CategoryUpdateSerializer(CategoryBaseSerializer):
    pass
