from server.serializers.category_serializers import (
    CategorySerializer,
    CategoryCreateSerializer,
    CategoryUpdateSerializer
)
from server.models import Category
from server.exception import (
    RESOURCE_NOT_FOUND,
    DATA_NOT_FOUND,
    CREATION_FAILED
)

class CategoryService:
    def get_categories_list(self, **kwargs):
        queryset = Category.objects.order_by("-created_at")
        serializer = CategorySerializer(queryset, many=True)
        return serializer

    def get_category_detail(self, **kwargs):
        request = kwargs.get("request", None)
        slug = kwargs.get("slug", None)

        if request is None:
            raise ValueError("request not found!")
        if slug is None:
            raise ValueError(RESOURCE_NOT_FOUND)
        try:
            category = Category.objects.get(slug=slug)
        except Category.DoesNotExist:
            raise ValueError(RESOURCE_NOT_FOUND)

        serializer = CategorySerializer(category)
        return serializer

    def category_create(self, **kwargs):
        request = kwargs.get("request", None)
        data = request.data

        if request is None:
            raise ValueError("request not found!")

        if data is None:
            raise ValueError(DATA_NOT_FOUND)

        serializer = CategoryCreateSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return serializer

    def category_update(self, **kwargs):
        request = kwargs.get("request", None)
        slug = kwargs.get("slug", None)

        data = request.data

        if request is None:
            raise ValueError("request not found!")
        if slug is None:
            raise ValueError(RESOURCE_NOT_FOUND)

        if slug is None or data is None:
            message = (
                DATA_NOT_FOUND
                if data is None
                else CREATION_FAILED)
            raise ValueError(message)

        try:
            category = Category.objects.get(slug=slug)
        except (Category.DoesNotExist):
            raise ValueError(RESOURCE_NOT_FOUND)

        serializer = CategoryUpdateSerializer(instance=category, data=data)

        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer=serializer)
        return serializer

    def category_delete(self, **kwargs):
        slug = kwargs.get("slug", None)

        if slug is None:
            raise ValueError(RESOURCE_NOT_FOUND)

        try:
            category = Category.objects.get(slug=slug)
        except (Category.DoesNotExist):
            raise ValueError(RESOURCE_NOT_FOUND)

        self.perform_destroy(instance=category)
        return True
    def perform_destroy(self, instance):
        instance.delete()

    def perform_create(self, serializer):
        serializer.save()

    def perform_update(self, serializer):
        serializer.save()
