from rest_framework.permissions import BasePermission, SAFE_METHODS

class IsSubscriberOrOwnerEditOrReadOnly(BasePermission):
    """
    Разрешает создание (POST) только если есть подписка.
    Разрешает редактирование (PUT, PATCH) только владельцу.
    Остальные могут только читать (GET, HEAD, OPTIONS).
    """
    def has_permission(self, request, view):
        if (
            request.user.is_authenticated
            and request.method == "POST"
        ):
            return True
        return request.method in SAFE_METHODS

    def has_object_permission(self, request, view, obj):
        if (
            request.user.is_authenticated
            and request.user == obj.user
            and request.method
                in ("PUT", "PATCH")
        ):
            return True
        return False
