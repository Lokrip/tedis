from server.exception import (
    REQUEST_NOT_FOUND,
    RESOURCE_NOT_FOUND,
    DATA_NOT_FOUND
)


class PerformCreated:
    def perform_create(self, instance):
        instance.save()


class PerformUpdated:
    def perform_updated(self, instance):
        instance.save()


class PerformDestroy:
    def perform_destroy(self, instance):
        instance.delete()


class PerformHelpers:
    def get_or_error(self, source, key, error_msg):
        value = getattr(source, key, None) if hasattr(source, key) else source.get(key)
        if value is None:
            raise ValueError(error_msg)
        return value

    def get_request(self, kwargs):
        return self.get_or_error(kwargs, "request", REQUEST_NOT_FOUND)

    def get_slug(self, kwargs):
        return self.get_or_error(kwargs, "slug", RESOURCE_NOT_FOUND)

    def get_id(self, kwargs):
        if kwargs.get("id", None) is not None:
            return self.get_or_error(kwargs, "id", RESOURCE_NOT_FOUND)
        return self.get_or_error(kwargs, "pk", RESOURCE_NOT_FOUND)

    def get_data(self, request):
        return self.get_or_error(request, "data", DATA_NOT_FOUND)

    def get_query_params(self, request):
        return self.get_or_error(request, "query_params", DATA_NOT_FOUND)

    def get_object_or_error(self, model, **kwargs):
        try:
            return model.objects.get(**kwargs)
        except model.DoesNotExist:
            raise ValueError(RESOURCE_NOT_FOUND)


class PerformActions(PerformCreated, PerformUpdated, PerformDestroy):
    pass


class PerformBase(PerformActions, PerformHelpers):
    pass
