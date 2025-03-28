from django.urls import (
    path,
    include
)

from rest_framework.routers import DefaultRouter

from server.views.banner_view import BannerViewSet

router = DefaultRouter()
router.register(r"banners", BannerViewSet, basename="banner")

banner_urlpatterns = [
    path("api/v1/", include(router.urls))
]
