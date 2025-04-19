import django_filters

from django.db.models import Q

from server.models import Product


class ProductFilter(django_filters.FilterSet):
    q = django_filters.CharFilter(method="filter_by_all")
    category = django_filters.CharFilter(field_name="category__slug")

    class Meta:
        model = Product
        fields = []

    #?search=hello world
    #name = "search" — это имя поля фильтра, то есть то, как ты его назвал в FilterSet.
    #value = "hello world" — это значение, которое пользователь ввёл в параметр search.
    def filter_by_all(self, queryset, name, value):
        return queryset.filter(
            Q(title__icontains=value) | Q(summary__icontains=value)
        )

# class ProductTitleFilter(django_filters.FilterSet):
#     #title=Phone → строгий поиск по title (exact match)
#     #?title_icontains=phone → частичное совпадение по title
#     #?summary=Cool → строгий поиск по summary
#     #?summary_icontains=cool → частичное совпадение по summary
#     title = django_filters.CharFilter()
#     # Имя поля модели для фильтрации Вы можете пройти по «путям взаимоотношений»,
#     # используя __синтаксис Django,
#     # чтобы фильтровать поля по связанной модели. например, manufacturer__name.
#     # lookup_expr: Поле поиска , используемое при фильтрации. Синтаксис Django __
#     # снова может быть использован для поддержки преобразований поиска. например, year__gte.
#     title_icontains = django_filters.CharFilter(field_name="title", lookup_expr="icontains")
#     summary = django_filters.CharFilter()
#     summary_icontains = django_filters.CharFilter(field_name="summary", lookup_expr="icontains")

#     #/api/products/?search=phone
#     search = django_filters.CharFilter(method="filter_by_all")

#     class Meta:
#         model = Product
#         fields = ["title", "summary"]

#     def filter_by_all(self, queryset, name, value):
#         return queryset.filter(
#             Q(title_icontains=value) | Q(summary__icontains=value)
#         )
