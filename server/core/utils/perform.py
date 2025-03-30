class PerformCreated:
    def perform_create(self, instance):
        instance.save()

class PerformUpdated:
    def perform_updated(self, instance):
        instance.save()

class PerformDestroy:
    def perform_destroy(self, instance):
        instance.delete()

class PerformBase(PerformCreated,
                  PerformUpdated,
                  PerformDestroy):
    pass
