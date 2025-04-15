from django.urls import path
from server.views.country_view import CountryView

country_urlpatterns = [
    path("country/", CountryView.as_view()),
    path("country/<str:name>/", CountryView.as_view()),
]
