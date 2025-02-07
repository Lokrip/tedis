from django.db.models import QuerySet

def get_queryset(model = None, filters=None, select_related=None, prefetch_related=None, order_by=None, only_fields=None) -> QuerySet:
    if(model is None or not isinstance(model, type)
       or not hasattr(model, "_meta")):
        raise ValueError("Modal not found")

    try:
        queryset = model.objects.all()
        if filters is not None:
            queryset = queryset.filter(**filters)
        if select_related is not None:
            queryset = queryset.select_related(*select_related)
        if prefetch_related is not None:
            queryset = queryset.prefetch_related(*prefetch_related)
        if order_by is not None:
            queryset = queryset.order_by(*order_by)
        if only_fields is None:
            queryset = queryset.only(*only_fields)
        return queryset;
    except Exception as e:
        raise RuntimeError(f"Ошибка при формировании QuerySet: {e}")

