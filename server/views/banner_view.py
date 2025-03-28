from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from server.mixins import BannerMixin
from server.models import Banner

class BannerViewSet(ViewSet):
    mixin = BannerMixin(Banner)
    def list(self, request):
        serializer = self.mixin.findAllBanners(request)
        return Response(serializer.data, status=status.HTTP_200_OK)
