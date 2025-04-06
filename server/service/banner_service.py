from server.models import (
    BannerProxy,
    Banner
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
        # request = self.get_request(kwargs)
        queryset = BannerProxy.objects.all()
        serializer = BannerListSerializer(queryset, many=True)
        return serializer

    def get_banner_by_id(self, **kwargs):
        # request = self.get_request(kwargs)
        id = self.get_id(kwargs)
        banner = self.get_object_or_error(Banner, slug=id)
        serializer = BannerDetailSerializer(banner)
        return serializer

    def get_banner_by_slug(self, **kwargs):
        # request = self.get_request(kwargs)
        slug = self.get_slug(kwargs)
        banner = self.get_object_or_error(Banner, slug=slug)
        serializer = BannerDetailSerializer(banner)
        return serializer

    def banner_create(self, **kwargs):
        request = self.get_request(kwargs)
        data = self.get_data(request=request)
        serializer = BannerCreateSerializer(data=data, context={"request": request})
        serializer.is_valid(raise_exception=True)
        self.perform_create(instance=serializer)
        return serializer

    def banner_update(self, **kwargs):
        request = self.get_request(kwargs)
        slug = self.get_slug(kwargs)
        data = self.get_data(request=request)
        banner = self.get_object_or_error(Banner, slug=slug)
        serializer = BannerUpdateSerializer(instance=banner, data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(instance=serializer)
        return serializer

    def banner_delete(self, **kwargs):
        slug = self.get_slug(kwargs)
        banner = self.get_object_or_error(Banner, slug=slug)
        self.perform_destroy(instance=banner)
        return True
