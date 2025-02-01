import {FC} from 'react';
import styles from './contentWrapper.module.scss';
import { getProductsData } from '../../../../../service/api/product.api';
import { IPaginationProduct } from '@/types/app/models/IProduct.type';
import PaginationInfiniteScrolling from '../../Pagination/PaginationInfiniteScrolling';
import ProductList from './ProductList/ProductList';

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
        <div className={styles.productContentWrapper}>
            <ProductList
                searchQuery={searchQuery}
                totalProductCount={productCount}
                initialProducts={products}
                getProductsData={getProductsData}
            />
        </div>
    )
};

export default ContentWrapper;
