from django.contrib import admin
from django.urls import path

from .auth import auth_urlpatterns

urlpatterns = [
    path('admin/', admin.site.urls),
]

urlpatterns += [
    *auth_urlpatterns
]
