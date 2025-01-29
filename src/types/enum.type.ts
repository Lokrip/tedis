export enum ProductError {
    // Продукт не найден в базе данных
    ProductNotFound = 'Product not found',

    // Продукт отсутствует на складе
    ProductOutOfStock = 'Product out of stock',

    // Продукт уже добавлен в корзину
    ProductAlreadyInCart = 'Product already in cart',

    // Продукт недоступен для покупки
    ProductNotAvailable = 'Product not available',

    // Несоответствие цены продукта (например, ошибка при расчете)
    ProductPriceMismatch = 'Product price mismatch',

    // Несоответствие категории продукта (например, попытка выбрать неправильную категорию)
    ProductCategoryMismatch = 'Product category mismatch',

    // Не удалось загрузить изображение продукта
    ProductImageNotFound = 'Product image not found',

    // Продукт не подходит для использования скидки
    ProductNotEligibleForDiscount = 'Product not eligible for discount',

    // Некорректное количество продукта (например, слишком малое или большое)
    ProductInvalidQuantity = 'Invalid product quantity',

    // Превышен лимит на количество продукта в заказе
    ProductOverLimit = 'Product limit exceeded',

    // Срок действия скидки на продукт истек
    ProductDiscountExpired = 'Product discount expired',

    // Продукт был удален и больше не доступен
    ProductRemoved = 'Product has been removed',

    // У пользователя нет прав для просмотра этого продукта
    ProductNotAuthorized = 'You are not authorized to view this product',

    // Продукт отсутствует на складе в выбранном регионе
    ProductOutOfStockInRegion = 'Product out of stock in your region',

    // Достигнут максимальный лимит количества данного продукта
    ProductMaxQuantityReached = 'Maximum quantity of product reached',

    // Продукт ограничен для продажи в определенных странах
    ProductRestricted = 'Product is restricted in your country',

    // Прошло время для возврата продукта
    ProductReturnWindowClosed = 'Product return window closed',

    // Некорректный идентификатор продукта
    ProductInvalidId = 'Invalid product ID',

    // Не найдена цена для указанного продукта
    ProductNoPriceFound = 'No price found for the product',

    // Продукт не доступен для выбора в составе пакета/комплекта
    ProductUnavailableInBundle = 'Product not available in this bundle',

    // Продукт не подлежит возврату
    ProductNotEligibleForReturn = 'Product not eligible for return',

    // Продукт отсутствует в списке желаемого пользователя
    ProductNotFoundInWishlist = 'Product not found in your wishlist',

    // Недостаточно товара для выбранного количества
    ProductNotEnoughStock = 'Not enough stock for requested quantity',

    // Для данного продукта не доступна доставка
    ProductShippingNotAvailable = 'Shipping not available for this product',

    // Обнаружен дублирующий продукт в корзине или заказе
    ProductDuplicateItem = 'Duplicate product item detected',

    // Продукт нельзя удалить из базы данных
    ProductCannotBeDeleted = 'Product cannot be deleted',

    // Продукт нельзя отредактировать (например, потому что он уже в корзине)
    ProductCannotBeEdited = 'Product cannot be edited',

    // Продукт уже существует в базе данных
    ProductAlreadyExists = 'Product already exists in the database',

    // Продукт временно недоступен для покупки
    ProductUnavailable = 'Product is unavailable for purchase',

    // Продукт не может быть куплен с использованием недействительного кода скидки
    ProductInvalidDiscountCode = 'Invalid discount code for product',

    // Продукт имеет задержку в доставке
    ProductShippingDelay = 'Product has shipping delays',

    // Продукт еще не прошел проверку качества или верификацию
    ProductNotVerified = 'Product is not verified yet',
}
