from django.contrib.auth import get_user_model

from rest_framework import serializers

from server.models import Product
from server.serializers.category_serializers import CategorySerializer
from server.exeption import RESOURCE_NOT_FOUND
from server.pagination import ProductResultsSetPagination

User = get_user_model()

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
            'category', 'user_id',
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
    pass

class ProductDetailSerializer(ProductFieldsAllSerializer):
    category = CategorySerializer(read_only=True)

    def to_representation(self, instance):
        data = super().to_representation(instance)

        similar_products = Product.objects.filter(
            category=instance.category
        ).exclude(
            id=instance.id
        )

        paginator = ProductResultsSetPagination()
        page = paginator.paginate_queryset(
            queryset=similar_products,
            request=self.context["request"]
        )
        if page is not None:
            similar_products_paginator = ProductListSerializer(page, many=True)
            return paginator.get_paginated_response(similar_products_paginator.data)


        similar_products = ProductListSerializer(similar_products, many=True)
        data['similarProducts'] = similar_products.data

        return data
