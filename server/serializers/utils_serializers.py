from rest_framework import serializers


class RecursiveSerializer(serializers.Serializer):
    def to_representation(self, data):
        serializer = self.parent.parent.__class__(data, context=self.context)
        return serializer.data
