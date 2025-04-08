from django.contrib.auth import get_user_model
from rest_framework import serializers

from server.models import (
    Product,
    ProductImage
)
from server.serializers.category_serializers import CategorySerializer
from server.exception import RESOURCE_NOT_FOUND

User = get_user_model()


class ProductImagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProductImage
        fields = ("id", "image", "product")
        extra_kwargs = {
            'id': {
                'read_only': True
            }
        }


class ProductFieldsAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"


class ProductBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id', 'slug', 'title', 'metaTitle', 'summary',
            'accessibility', 'condition', 'warehouse',
            'promotional', 'checks', 'price', 'discount',
            "price_discount", 'category', 'user'
        )
        extra_kwargs = {
            'id': {
                'read_only': True
            },
            'slug': {
                "read_only": True
            },
        }


class ProductCreateSerializer(ProductBaseSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())


class ProductUpdateSerializer(ProductBaseSerializer):
    def validate(self, attrs):
        return super().validate(attrs)


class ProductListSerializer(ProductFieldsAllSerializer):
    image = serializers.SerializerMethodField()

    def get_image(self, obj):
        images = ProductImage.objects.filter(product=obj, is_main=True)
        if images.exists():
            return images.first().get_image()
        return None


class ProductDetailSerializer(ProductFieldsAllSerializer):
    category = CategorySerializer(read_only=True)
