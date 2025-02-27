from django.core.exceptions import (
    ObjectDoesNotExist
)
from django.utils.text import slugify

from django.db.models import Model
from typing import Type

from server.service.product_service import (
    get_product_list,
    get_product_detail
)
from server.exception import CustomAttributeException

class Mixin:
    def __init__(self, model: Type[Model]):
        self.model = model

    def _find_by_field(self, field: str, value: str, isSlugify: bool):
        if not value or not isinstance(value, str):
            raise ObjectDoesNotExist("Data not found!")

        SLUG_FIELDS = ("slug", "slugify", "url_slug", "seo_slug", "permalink")

        if field in SLUG_FIELDS and isSlugify:
            value = slugify(value)

        try:
            return self.model.objects.get(**{field: value})
        except AttributeError:
            raise CustomAttributeException(
                "Field '%s' does not exist in the model" % (field)
            )

    def _object_by_id_not_found(self, id):
        raise ObjectDoesNotExist(
                "%s with id %d does not exist." % (
                    self.model.__name__,
                    id.__int__()
                )
        )

    def findAll(self):
        return self.model.objects.all()

    def findById(self, id):
        if not id or not isinstance(id, int):
            raise ObjectDoesNotExist("Data not found!")
        return self.model.objects.get(pk=id)

    def create(self, **kwargs):
        save_model = self.model.objects.create(**kwargs)
        try:
            return save_model
        except save_model.DoesNotExist:
            return None

    def update(self, id: int, **kwargs):
        try:
            instance = self.findById(id=id)
        except self.model.DoesNotExist:
            raise self._object_by_id_not_found(id=id)

        for field, value in kwargs.items():
            setattr(instance, field, value)

        instance.save()
        return instance

    def delete(self, id: int):
        try:
            delete_model = self.findById(id=id)
        except self.model.DoesNotExist:
            raise self._object_by_id_not_found(id=id)

        delete_model.delete()
        return True


class CrudMixin(Mixin):
    def __init__(self, model):
        super().__init__(model)

    def __str__(self):
        return "This mixin adds additional CRUD methods for the %s model" % (
            self.model.__name__
        )

    def findByTitle(self, title: str):
        return self._find_by_field("title", title)

    def findBySlug(self, slug: str, isSlugify: bool):
        return self._find_by_field("slug", slug, isSlugify)

class CategoryMixin(CrudMixin):
    def __init__(self, model):
        super().__init__(model)


    def __str__(self):
        return "This mixin adds additional CRUD methods for the %s model" % (
            self.model.__name__
        )

class ProductMixin(CrudMixin):
    def __init__(self, model):
        super().__init__(model)

    def __str__(self):
        return "This mixin adds additional CRUD methods for the %s model" % (
            self.model.__name__
        )

    def findProductAll(self, request, view):
        return get_product_list(request=request, view=view)

    def findProductBySlug(self, request, slug):
        return get_product_detail(request=request, slug=slug)
