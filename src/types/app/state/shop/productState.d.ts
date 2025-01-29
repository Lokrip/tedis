type ProductId = number;

interface ProductState {
    entitiesProduct: Record<ProductId, IProduct>;
    ids: ProductId[],
    selectedProductId: ProductId | null;
    isError: boolean;
    error: string | null;
}
