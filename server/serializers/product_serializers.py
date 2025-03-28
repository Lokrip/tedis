from decimal import Decimal

from django.contrib.auth import get_user_model

from rest_framework import serializers

from server.models import (
    Product,
    ProductImage
)
from server.serializers.category_serializers import CategorySerializer
from server.exception import RESOURCE_NOT_FOUND
from server.pagination import ProductResultsSetPagination

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
    user_id = serializers.IntegerField(required=False)


    class Meta:
        model = Product
        fields = (
            'id', 'slug', 'title', 'metaTitle', 'summary',
            'accessibility', 'condition', 'warehouse',
            'promotional', 'checks', 'price', 'discount',
            "price_discount", 'category', 'user_id',
        )
        extra_kwargs = {
            'id': {
                'read_only': True
            },
            'slug': {
                "read_only": True
            },
        }
    def validate(self, attrs):
        user_id = attrs.pop("user_id", None)

        try:
            if user_id is None and not user_id:
                user = self.context["request"].user
            else:
                user = User.objects.get(pk=user_id)
        except User.DoesNotExist:
            raise serializers.ValidationError(RESOURCE_NOT_FOUND)

        attrs['user'] = user
        return super().validate(attrs)

class ProductCreateSerializer(ProductBaseSerializer):
    pass

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
