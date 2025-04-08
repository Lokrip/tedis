from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import HTTP_404_NOT_FOUND

from server.exception import DATA_NOT_FOUND

from django_countries import countries


class CountryView(APIView):
    def get(self, request, name=None):
        countries_list = [{"code": code, "name": name} for code, name in countries]

        if name is not None:
            name = name.capitalize()
            country = None
            for country_dict in countries_list:
                country_name = country_dict.get("name", None)
                if country_name == name:
                    country = country_name
            if country is not None:
                return Response({"name": country})
            else:
                return Response({"message": DATA_NOT_FOUND}, status=HTTP_404_NOT_FOUND)

        return Response(countries_list)
