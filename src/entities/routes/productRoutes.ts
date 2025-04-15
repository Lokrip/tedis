export class ProductRoute {
    public static productByCategory: string = "/ct"
    public static product: string = "/product";
    public static details(param: string | number): string {
        return `${this.product}/${param}`;
    }

    public static productByCategoryFilter(param: string | number): string {
        return `${this.productByCategory}/${param}`;
    }
}
