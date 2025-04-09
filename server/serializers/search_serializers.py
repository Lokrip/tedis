from rest_framework import serializers

from server.models import PopularSearch


class PopularSearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = PopularSearch
        fields = ["id", "query", "count"]
