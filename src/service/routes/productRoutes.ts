export class ProductRoute {
    public static product: string = "/product";
    public static details(param: string | number): string {
        return `${this.product}/${param}`;
    }
}
