from server.serializers.category_serializers import (
    CategorySerializer,
    CategoryCreateSerializer,
    CategoryUpdateSerializer
)
from server.models import Category
from server.core.utils.perform import PerformBase


class CategoryService(PerformBase):
    def get_categories_list(self, **kwargs):
        queryset = Category.objects.order_by("-created_at")
        serializer = CategorySerializer(queryset, many=True)
        return serializer

    def get_category_detail(self, **kwargs):
        # request = self.get_request(kwargs)
        slug = self.get_slug(kwargs)
        category = self.get_object_or_error(Category, slug=slug)
        serializer = CategorySerializer(category)
        return serializer

    def category_create(self, **kwargs):
        request = self.get_request(kwargs)
        data = self.get_data(request=request)
        serializer = CategoryCreateSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        return serializer

    def category_update(self, **kwargs):
        request = self.get_request(kwargs)
        slug = self.get_slug(kwargs)
        data = self.get_data(request=request)
        category = self.get_object_or_error(Category, slug=slug)
        serializer = CategoryUpdateSerializer(instance=category, data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer=serializer)
        return serializer

    def category_delete(self, **kwargs):
        slug = self.get_slug(kwargs)
        category = self.get_object_or_error(Category, slug=slug)
        self.perform_destroy(instance=category)
        return True
