from server.models import Banner
from server.exception import REQUEST_NOT_FOUND
from server.serializers.banner_serializers import BannerListSerializer

class BannerService:
    def get_banner_list(self, **kwargs):
        request = kwargs.pop('request', None)
        if request is None:
            raise ValueError(REQUEST_NOT_FOUND)
        queryset = Banner.objects.all()
        serializer = BannerListSerializer(queryset, many=True)
        return serializer
