from rest_framework import serializers


class BaseShopSerializer(serializers.ModelSerializer):
    # Когда ты используешь ModelSerializer,
    # DRF анализирует модель и автоматически подбирает
    # подходящее поле сериализатора для связанного поля модели.
    # class Meta:
    #    model = Book
    #    fields = ['title', 'author']
    # В этом случае, DRF автоматически подставит
    # PrimaryKeyRelatedField для author, потому что это
    # ForeignKey. Это и есть срабатывание механизма serializer_related_field.
    # Механизм serializer_related_field — это внутренняя часть логики ModelSerializer,
    # которая решает, какой RelatedField применить.
    serializer_related_field = serializers.PrimaryKeyRelatedField
    # serializer_field_mapping — это атрибут класса в ModelSerializer
    # из Django REST Framework (DRF),
    # который определяет соответствие между типами полей модели
    # (models.Field) и полями сериализатора (serializers.Field).
    serializer_field_mapping = (
        serializers.ModelSerializer.serializer_field_mapping.copy()
    )
    meta_fields = ['type', 'detail_url']

    def get_type(self, obj):
        return obj.__class__.___name___

    # def get_detail_url(self, obj):
    #     req
