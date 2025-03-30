class PerformCreated:
    def perform_create(self, instance):
        instance.save()

class PerformUpdated:
    def perform_updated(self, instance):
        instance.save()

class PerformDeleted:
    def perform_deleted(self, instance):
        instance.delete()

class PerformBase(PerformCreated,
                  PerformUpdated,
                  PerformDeleted):
    pass
