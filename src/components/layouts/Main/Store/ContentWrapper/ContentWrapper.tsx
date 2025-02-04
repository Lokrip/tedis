import {FC} from 'react';
import styles from './contentWrapper.module.scss';
import { IPaginationProduct } from '@/types/app/models/IProduct.type';
import ProductList from './ProductList/ProductList';
import { getProductsData } from '@/core/api/product.api';

interface ContentWrapperProps {
    param?: any;
}

const ContentWrapper: FC<ContentWrapperProps> = async ({param}) => {
    const searchQuery = param.q ?? param.searchQuery;
    const currentPage = Number(param?.page) || 1;

    const {results: products, count: productCount} = await getProductsData<IPaginationProduct>(
        searchQuery,
        {isPagination: true,
        currentPage: currentPage}
    )

    return (
        <ProductList
            searchQuery={searchQuery}
            totalProductCount={productCount}
            initialProducts={products}
            getProductsData={getProductsData}
            classNameListDataContainer={styles.productContentWrapper}
        />
    )
};

export default ContentWrapper;
