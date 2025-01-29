import {FC, Fragment} from 'react';
import styles from './contentWrapper.module.scss';
import PCard from '../../../../ui/elements/card/PrimaryCard/PrimaryCard';
import { getProductsData } from '../../../../../service/api/product.api';
import Pagination from '../../Pagination/Pagination';
import { IPaginationProduct } from '@/types/app/models/IProduct.type';
import ProductList from './ProductList/ProductList';

interface ContentWrapperProps {
    param?: any;
}

const ContentWrapper: FC<ContentWrapperProps> = async ({param}) => {
    const searchQuery = param.q ?? param.searchQuery;
    const currentPage = Number(param?.page) || 1;

    const {results: products} = await getProductsData<IPaginationProduct>(
        searchQuery,
        {isPagination: true,
        currentPage: currentPage}
    )

    return (
        <div className={styles.productContentWrapper}>
            <ProductList initialProduct={products} />
        </div>
    )
};

export default ContentWrapper;
