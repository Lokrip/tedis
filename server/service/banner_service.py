from server.models import (
    BannerProxy,
    Banner
)
from server.exception import (
    REQUEST_NOT_FOUND,
    RESOURCE_NOT_FOUND,
    DATA_NOT_FOUND
)
from server.serializers.banner_serializers import (
    BannerListSerializer,
    BannerDetailSerializer
)

class BannerService:
    def get_banner_list(self, **kwargs):
        request = kwargs.pop('request', None)
        if request is None:
            raise ValueError(REQUEST_NOT_FOUND)
        queryset = BannerProxy.objects.all()
        serializer = BannerListSerializer(queryset, many=True)
        return serializer

    def get_banner_by_id(self, **kwargs):
        request = kwargs.pop('request', None)
        id = kwargs.get('id', None)
        if request is None:
            raise ValueError(REQUEST_NOT_FOUND)

        try:
            banner = Banner.objects.get(id=id)
        except Banner.DoesNotExist:
            raise ValueError(RESOURCE_NOT_FOUND)

        serializer = BannerDetailSerializer(banner)
        return serializer

    def get_banner_by_slug(self, **kwargs):
        request = kwargs.pop('request', None)
        slug = kwargs.get('slug', None)
        if request is None:
            raise ValueError(REQUEST_NOT_FOUND)
        try:
            banner = Banner.objects.get(slug=slug)
        except Banner.DoesNotExist:
            raise ValueError(RESOURCE_NOT_FOUND)

        serializer = BannerDetailSerializer(banner)
        return serializer

    def banner_create(self, **kwargs):
        request = kwargs.get("request", None)
        data = request.data

        if data is None:
            raise ValueError(DATA_NOT_FOUND)

        if request is None:
            raise ValueError(REQUEST_NOT_FOUND)

