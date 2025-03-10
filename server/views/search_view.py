from rest_framework.viewsets import ViewSet
from rest_framework.decorators import action
from rest_framework.response import Response
from rest_framework import status

from server.models import PopularSearch
from server.serializers.search_serializers import PopularSearchSerializer

class SearchViewSet(ViewSet):
    @action(detail=False, methods=["get"])
    def suggestions(self, request):
        query = request.query_params.get('query', '')
        if query:
            suggestions = (PopularSearch.objects
                .filter(query__icontains=query)
                .order_by("-count")[:10]
            )
        else:
            suggestions = PopularSearch.objects.all().order_by("-count")[:10]
        serializer = PopularSearchSerializer(suggestions, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    @action(detail=False, methods=["post"], url_path="add-popular-search")
    def add_popular_search(self, request):
        query = request.data.get("query", "")
        if query:
            popular_search, created = PopularSearch.objects.get_or_create(query=query)
            if not created:
                popular_search.count += 1
                popular_search.save()
                return Response(
                    {"message": "The search has become more modern, the search counter has increased."},
                    status=status.HTTP_200_OK
                )

            return Response(
                {"message": "Search added to popular search list"},
                status=status.HTTP_201_CREATED
            )
        else:
            return Response({"error": "Query not provided"}, status=status.HTTP_400_BAD_REQUEST)
