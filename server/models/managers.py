from django.db import models

class BannerManager(models.Manager):
    def get_queryset(self):
        return super().get_queryset().filter(is_active=True)

    def count_banners(self):
        return self.count()
