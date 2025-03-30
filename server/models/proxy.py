from server.models.advertising import Banner
from server.models.managers import BannerManager

class BannerProxy(Banner):
    class Meta:
        proxy = True
        ordering = ['-created_at']

    objects = BannerManager()
