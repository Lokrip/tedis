export type ProductFunApiSearchAttributes = string | null;
export type ProductPaginationCurrentPage = number | null

export interface ProductFunApiPaginationAttributes {
    isPagination?: boolean;
    currentPage?: ProductPaginationCurrentPage
}
