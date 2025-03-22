import uuid
import random

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


def generate_unique_code(length: int):
    while True:
        code = ''.join([str(random.randint(0, 9)) for _ in range(length)])
        if not GenerateCodeConfirmationEmail.objects.filter(code=code).exists():
            return code
