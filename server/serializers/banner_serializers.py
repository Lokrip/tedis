from rest_framework import serializers

from server.models import Banner

class BannerFieldsAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = "__all__"

class BannerBaseSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = [
            "id",
            "title",
            "metaTitle",
            "image",
            "slug",
            "is_active",
            "user"
        ]
        extra_kwargs = {
            "image": {
                "required": False
            },
            "id": {
                "read_only": True
            },
            "slug": {
                "read_only": True
            }
        }


class BannerListSerializer(BannerFieldsAllSerializer):
    pass

class BannerDetailSerializer(BannerFieldsAllSerializer):
    pass

class BannerCreateSerializer(BannerBaseSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

class BannerUpdateSerializer(BannerBaseSerializer):
    pass
