from rest_framework.serializers import (
    Field, CharField
)

from server.core.utils.urls import build_absolute_uri_to_media


class TypeField(Field):
    #Этот метод переопределяется, чтобы вернуть сам объект instance.
    #По умолчанию Field.get_attribute получает нужное поле из объекта, например instance.some_field.
    #А тут — просто возвращает весь объект, потому что to_representation будет использовать его целиком.
    def get_attribute(self, instance):
        return instance

    def to_representation(self, obj):
        name = type(obj)._meta.app_label + "." + type(obj).__name__
        self.context["view"].seen_types[name] = type(obj)
        return name


class MainImageURLField(CharField):
    def to_representation(self, images):
        images = images.filter(is_main=True)
        request = self.context.get('request')
        if images.exists() and request:
            return build_absolute_uri_to_media(
                request=request,
                media=images.first().get_image()
            )
        return None
