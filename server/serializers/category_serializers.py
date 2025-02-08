from rest_framework import serializers

from server.models import Category

from .utils_serializers import RecursiveSerializer

class CategorySerializer(serializers.ModelSerializer):
    children = RecursiveSerializer(many=True)

    class Meta:
        model = Category
        fields = ("id", "title", "metaTitle",
                  "slug", "children")
