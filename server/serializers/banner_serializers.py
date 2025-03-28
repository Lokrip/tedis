from rest_framework import serializers

from server.models import Banner

class BannerFieldsAllSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = "__all__"

class BannerListSerializer(BannerFieldsAllSerializer):
    pass
