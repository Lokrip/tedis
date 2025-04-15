from django.urls import (
    path,
    include
)

from server.views.banner_view import BannerViewSet
from server.router import router

router.register(r"banners", BannerViewSet, basename="banner")

banner_urlpatterns = [
    path("", include(router.urls))
]
