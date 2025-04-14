from django.contrib.auth import get_user_model
from rest_framework import serializers

from server.models import (
    Product,
    ProductImage
)
from server.serializers.category_serializers import CategorySerializer
from server.fields import MainImageURLField

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


class ProductUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = (
            'id', 'slug', 'title', 'metaTitle', 'summary',
            'accessibility', 'condition', 'warehouse',
            'promotional', 'checks', 'price', 'discount',
            "price_discount", 'category'
        )
        extra_kwargs = {
            'id': {
                'read_only': True
            },
            'slug': {
                "read_only": True
            },
        }

    def update(self, instance, validated_data):
        if not validated_data.get("user_id"):
            validated_data["user_id"] = instance.user.pk
        if not validated_data.get("slug"):
            validated_data["slug"] = instance.slug
        return super().update(instance, validated_data)


class ProductListSerializer(ProductFieldsAllSerializer):
    image = serializers.SerializerMethodField()
    main_image_url = MainImageURLField(source="images")

    def get_image(self, obj):
        images = obj.images.filter(is_main=True)
        if images.exists():
            return images.first().get_image()
        return None

    # def to_representation(self, instance):
    #     representation = super().to_representation(instance)

    #     representation['media'] = {
    #         'image': representation.pop('image', None),
    #         'main_image_url': representation.pop('main_image_url', None),
    #     }

    #     representation['product_status'] = {
    #         'accessibility': representation.pop('accessibility', None),
    #         'condition': representation.pop('condition', None),
    #         'warehouse': representation.pop('warehouse', None),
    #         'promotional': representation.pop('promotional', None),
    #         'checks': representation.pop('checks', None),
    #     }

    #     representation['prices'] = {
    #         'price': representation.pop('price', None),
    #         'discount': representation.pop('discount', None),
    #         'price_discount': representation.pop('price_discount', None)
    #     }

    #     return representation


class ProductDetailSerializer(ProductFieldsAllSerializer):
    category = CategorySerializer(read_only=True)
