class Route {
    public home: string = "/"
    public product: string = "/product";
    public dynamicProductPage: string = "/product";

    /**
     * Генерирует динамический маршрут для страницы продукта
     * @param param - Идентификатор продукта (строка или число)
     * @returns Динамический маршрут
     */
    public getDynamicProductPage(param: string | number): string {
        return `${this.dynamicProductPage}/${param}`;
    }
}

const pages = new Route()
export default pages;