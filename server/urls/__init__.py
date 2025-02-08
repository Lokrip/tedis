from django.contrib import admin
from django.urls import path

from debug_toolbar.toolbar import debug_toolbar_urls

from .auth import auth_urlpatterns

from .product import product_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    *auth_urlpatterns,
    *product_urlpatterns,
] + debug_toolbar_urls()
