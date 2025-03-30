import uuid
import random

from django.utils.text import slugify

from server.models import GenerateCodeConfirmationEmail

def generate_unique_slug(model, **kwargs):
    while True:
        temp_slug = "{base_slug}-{id}-{uuid}".format(
            **kwargs,
            uuid=uuid.uuid4()
        ) if kwargs.get("id", None) is not None else "{base_slug}-{uuid}".format(
            **kwargs,
            uuid=uuid.uuid4()
        )
        if not model.objects.filter(slug=temp_slug).exists():
            return temp_slug


def generate_and_save_slug(instance):
    base_slug = slugify(instance.title)
    instance.slug = generate_unique_slug(instance.__class__, base_slug=base_slug)

    super(instance.__class__, instance).save()

    final_slug = generate_unique_slug(instance.__class__, base_slug=base_slug, id=instance.id)
    instance.slug = final_slug

    super(instance.__class__, instance).save(update_fields=["slug"])


def generate_unique_code(length: int):
    while True:
        code = ''.join([str(random.randint(0, 9)) for _ in range(length)])
        if not GenerateCodeConfirmationEmail.objects.filter(code=code).exists():
            return code
