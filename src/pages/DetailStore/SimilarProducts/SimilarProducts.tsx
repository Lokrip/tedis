import styles from "./similarProducts.module.scss";
import ProductList from '@/features/ProductList/ProductList';
import { ProductFunApiPaginationAttributes, ProductFunApiSearchAttributes } from '@/types/app/api/product.type';
import { IPaginationResponse } from '@/types/app/models/IPaginationResponse.type';
import { IProduct } from '@/types/app/models/IProduct.type';
import {FC} from 'react';

interface SimilarProductsProps {
    totalProductCount: number,
    products: IProduct[],
    getProductsData: (
        search: ProductFunApiSearchAttributes,
        {
            isPagination,
            currentPage
        }: ProductFunApiPaginationAttributes
    ) => Promise<IPaginationResponse<IProduct>>;
}

const SimilarProducts: FC<SimilarProductsProps> = ({
    totalProductCount,
    products,
    getProductsData
}) => {

    return (
        <ProductList
            totalProductCount={totalProductCount}
            initialProducts={products}
            getProductsData={getProductsData}
            classNameListDataContainer={styles.similarProductsList}
        />
    );
};

export default SimilarProducts;
