from server.models import (
    BannerProxy,
    Banner
)
from server.exception import (
    REQUEST_NOT_FOUND,
    RESOURCE_NOT_FOUND,
    DATA_NOT_FOUND
)
from server.core.utils.perform import PerformBase
from server.serializers.banner_serializers import (
    BannerListSerializer,
    BannerDetailSerializer,
    BannerCreateSerializer,
    BannerUpdateSerializer
)

class BannerService(PerformBase):
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


        serializer = BannerCreateSerializer(data=data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return serializer

    def banner_update(self, **kwargs):
        request = kwargs.get("request", None)
        slug = kwargs.get("slug", None)

        data = request.data

        if request is None:
            raise ValueError(REQUEST_NOT_FOUND)
        if data is None:
            raise ValueError(DATA_NOT_FOUND)
        if slug is None:
            raise ValueError(RESOURCE_NOT_FOUND)

        try:
            banner = Banner.objects.get(slug=slug)
        except Banner.DoesNotExist:
            raise ValueError(RESOURCE_NOT_FOUND)

        serializer = BannerUpdateSerializer(instance=banner, data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_updated(serializer)
        return serializer

    def banner_delete(self, **kwargs):
        slug = kwargs.get("slug", None)

        if slug is None:
            return ValueError(RESOURCE_NOT_FOUND)

        try:
            banner = Banner.objects.get(slug=slug)
        except Banner.DoesNotExist:
            raise ValueError(RESOURCE_NOT_FOUND)

        self.perform_destroy(banner)
        return True
