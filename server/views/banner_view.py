from rest_framework.viewsets import ViewSet
from rest_framework.response import Response
from rest_framework import status

from server.mixins import BannerMixin
from server.models import Banner
from server.permissions.product_permissions import IsSubscriberOrOwnerEditOrReadOnly


class BannerViewSet(ViewSet):
    lookup_field = "slug"
    permission_classes = [IsSubscriberOrOwnerEditOrReadOnly]
    mixin = BannerMixin(Banner)

    def list(self, request):
        serializer = self.mixin.findAllBanners(request)
        return Response(serializer.data, status=status.HTTP_200_OK)

    def retrieve(self, request, slug=None):
        try:
            serializer = self.mixin.findBannerBySlug(slug=slug, request=request)
        except ValueError as EXCEPTION:
            return Response(
                {"message": str(EXCEPTION)},
                status=status.HTTP_404_NOT_FOUND
            )
        return Response(serializer.data, status=status.HTTP_200_OK)

    def create(self, request):
        try:
            serializer = self.mixin.createBanner(request=request)
        except ValueError as EXCEPTION:
            return Response(
                {"message": str(EXCEPTION)},
                status=status.HTTP_404_NOT_FOUND
            )

        headers = self.get_success_headers(
            f'/api/v1/products/{serializer.data.get("id") if (serializer.data.get("id", None) is not None) else ""}'
        )

        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED,
            headers={
                **headers,
                "Content-type": "application/json"
            }
        )

    def get_success_headers(self, location):
        try:
            return {'Location': str(location)}
        except (TypeError, KeyError):
            return {}
