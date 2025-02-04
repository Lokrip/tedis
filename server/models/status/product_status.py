from django.db import models

class ProductAccessibilityStatus(models.TextChoices):
    # Статус доступности
    AVAILABLE = 'available', 'Доступен'
    OUT_OF_STOCK = 'out_of_stock', 'Нет в наличии'
    COMING_SOON = 'coming_soon', 'Скоро в продаже'
    PRE_ORDER = 'pre_order', 'Предзаказ'

class ProductConditionStatus(models.TextChoices):
    # Статус состояния продукта
    NEW = 'new', 'Новый'
    USED = 'used', 'Б/У'
    REFURBISHED = 'refurbished', 'Восстановленный'
    DAMAGED = 'damaged', 'Поврежден'

class ProductWarehouseStatus(models.TextChoices):
    # Статус на складе
    RESERVED = 'reserved', 'Зарезервирован'
    IN_WAREHOUSE = 'in_warehouse', 'На складе'
    OUT_FOR_DELIVERY = 'out_for_delivery', 'Отправлен на доставку'

class ProductPromotionalStatus(models.TextChoices):
    # Акционные статусы
    ON_SALE = 'on_sale', 'Акция'
    LIMITED_OFFER = 'limited_offer', 'Ограниченное предложение'
    FLASH_SALE = 'flash_sale', 'Молниеносная распродажа'
    BLACK_FRIDAY = 'black_friday', 'Черная пятница'

class ProductChecksStatus(models.TextChoices):
    # Статус проверки
    UNDER_REVIEW = 'under_review', 'На проверке'
    APPROVED = 'approved', 'Одобрен'
    REJECTED = 'rejected', 'Отклонен'

# # Статус заказа
# SOLD = 'sold', 'Продан'
# CANCELLED = 'cancelled', 'Отменен'
# RETURNED = 'returned', 'Возвращен'
# PENDING = 'pending', 'Ожидает'
# # Статус доставки
# SHIPPED = 'shipped', 'Отправлен'
# DELIVERED = 'delivered', 'Доставлен'
# IN_TRANSIT = 'in_transit', 'В пути'

