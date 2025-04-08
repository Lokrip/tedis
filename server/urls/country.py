from django.urls import path
from server.views.country_view import CountryView

country_urlpatterns = [
    path("api/v1/country/", CountryView.as_view()),
    path("api/v1/country/<str:name>/", CountryView.as_view()),
]
