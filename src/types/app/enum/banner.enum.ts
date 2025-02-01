export enum BannerError {
    // Баннер не найден в базе данных
    BannerNotFound = 'Banner not found',

    // Ошибка при загрузке изображения баннера (например, неверный формат или поврежденный файл)
    BannerImageError = 'Banner image loading error',

    // Ошибка с разрешением формата изображения (например, файл слишком большой)
    BannerImageResolutionError = 'Invalid image resolution for banner',

    // Ошибка с допустимыми размерами баннера (например, слишком большой или маленький размер)
    BannerSizeError = 'Invalid banner size',

    // Ошибка при размещении баннера (например, баннер не может быть размещен на текущей странице)
    BannerPlacementError = 'Error placing banner',

    // Ошибка при подключении баннера к рекламной системе
    BannerConnectionError = 'Banner connection error',

    // Баннер не прошел модерацию (например, несоответствие стандартам)
    BannerRejected = 'Banner rejected by moderation',

    // Истек срок действия баннера (например, рекламная кампания завершена)
    BannerExpired = 'Banner expired',

    // Недостаточно средств для оплаты размещения баннера
    BannerInsufficientFunds = 'Insufficient funds for banner placement',

    // Баннер не подходит для выбранного типа страницы (например, не совместим с мобильной версией)
    BannerCompatibilityError = 'Banner compatibility error',

    // Ошибка при получении статистики или данных по показам баннера
    BannerStatsError = 'Error retrieving banner stats',

    // Ошибка при удалении баннера (например, баннер не может быть удален из-за его статуса)
    BannerDeleteError = 'Error deleting banner',

    // Попытка разместить баннер с неправильными или пустыми данными
    BannerDataError = 'Invalid banner data',

    // Ошибка при подключении к платежной системе для оплаты баннера
    BannerPaymentError = 'Error processing banner payment',

    // Баннер не может быть показан из-за наличия технических проблем (например, неправильный код)
    BannerDisplayError = 'Error displaying banner',

    // Платеж за баннер отклонен (например, из-за неправильных данных)
    BannerPaymentDeclined = 'Banner payment declined',

    // Баннер не может быть размещен на указанной платформе или в выбранной категории
    BannerPlatformError = 'Banner platform error',

    // Попытка повторного размещения того же баннера (например, дублирование)
    BannerDuplicateError = 'Duplicate banner placement error',

    // Проблемы с авторизацией при попытке разместить или редактировать баннер
    BannerAuthorizationError = 'Authorization error for banner placement',

    // Превышен лимит на количество баннеров для данного пользователя
    BannerLimitExceeded = 'Banner limit exceeded',
  }

export enum BannerRole {
    // Баннер рекламирует основную продукцию магазина
    MainProduct = 'Main Product',

    // Баннер представляет товар на распродаже
    OnSale = 'On Sale',

    // Баннер связан с акцией или специальным предложением
    Promotional = 'Promotional',

    // Баннер с эксклюзивной рекламой (например, для партнеров)
    Exclusive = 'Exclusive',

    // Баннер для рекламы партнеров или сторонних компаний
    Partner = 'Partner',

    // Баннер для привлечение новых пользователей или подписчиков
    NewUser = 'New User',

    // Баннер для привлечения внимания к ограниченному предложению или продукту
    LimitedEdition = 'Limited Edition',

    // Баннер представляет товар, пользующийся высокой популярностью
    Bestseller = 'Bestseller',

    // Баннер для объявления скидок на определенные товары
    Discount = 'Discount',

    // Баннер для рекламы доставки, бесплатной доставки и т.п.
    Shipping = 'Shipping',

    // Баннер для социальных акций или мероприятий
    Event = 'Event',

    // Баннер на главной странице для привлечения внимания к магазину
    Homepage = 'Homepage',
}


export enum BannerPayer {
    // Рекламодатель сам заплатил за размещение баннера
    Advertiser = 'Advertiser',

    // Платеж был произведен через партнерскую программу
    Affiliate = 'Affiliate',

    // Платеж за баннер осуществил сам магазин
    Store = 'Store',

    // Платеж был произведен через систему акций и предложений
    PromoSystem = 'Promo System',

    // Баннер был размещен по обмену (бартер)
    Barter = 'Barter',

    // Баннер был размещен на условиях спонсорства
    Sponsor = 'Sponsor',
}
