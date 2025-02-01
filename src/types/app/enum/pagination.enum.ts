export enum PaginationError {
    // Ошибка при загрузке данных
    DataLoadError = 'Error loading data',

    // Невозможно найти данные для страницы
    NoDataFound = 'No data found',

    // Ошибка при запросе страницы
    PageRequestError = 'Error requesting page',

    // Превышен лимит для отображения страниц
    PageLimitExceeded = 'Page limit exceeded',

    // Некорректная страница
    InvalidPage = 'Invalid page',

    // Ошибка при обновлении пагинации
    PaginationUpdateError = 'Pagination update error',

    // Ошибка в параметрах пагинации
    InvalidPaginationParameters = 'Invalid pagination parameters',
}

export enum PaginationStatus {
    // Страница успешно загружена
    Loaded = 'Loaded',

    // Страница в процессе загрузки
    Loading = 'Loading',

    // Страница пуста (например, данных нет)
    Empty = 'Empty',

    // Страница не найдена (например, вышла за пределы доступных страниц)
    NotFound = 'Not Found',

    // Страница загружена с ошибками
    Error = 'Error',

    // Страница временно недоступна
    Unavailable = 'Unavailable',
}

export enum PaginationRole {
    // Пагинация для стандартного списка товаров
    ProductList = 'Product List',

    // Пагинация для списка заказов
    OrderList = 'Order List',

    // Пагинация для истории пользователя
    UserHistory = 'User History',

    // Пагинация для поиска
    SearchResults = 'Search Results',

    // Пагинация для комментариев
    CommentList = 'Comment List',

    // Пагинация для отзывов
    ReviewList = 'Review List',

    // Пагинация для загрузки изображений
    ImageGallery = 'Image Gallery',
}
