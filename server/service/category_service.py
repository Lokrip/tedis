from server.serializers.category_serializers import CategorySerializer
from server.models import Category

#сделать класс сервис
def get_categories_list(**kwargs):
    queryset = Category.objects.order_by("-created_at")
    serializer = CategorySerializer(queryset, many=True)
    return serializer
