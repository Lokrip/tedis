from rest_framework import serializers

from server.models import Product

from .category_serializers import CategorySerializer


class ProductCreateSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = Product
        fields = (
            'id', 'title', 'metaTitle', 'summary',
            'accessibility', 'condition', 'warehouse',
            'promotional', 'checks', 'price', 'discount',
            'category', 'user'
        )
        extra_kwargs = {'id': {'read_only': True}}



    def validate(self, attrs):
        request = self.context.get("request")
        if not request or not request.user.is_authenticated:
            raise serializers.ValidationError("User is not authenticated")
        return super().validate(attrs)

class ProductDetailSerializer(serializers.ModelSerializer):
    category = CategorySerializer(read_only=True)

    class Meta:
        model = Product
        fields = "__all__"


class ProductListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = "__all__"
