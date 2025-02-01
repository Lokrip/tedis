"use client"

import {FC} from 'react';

import styles from './productList.module.scss';
import PaginationInfiniteScrolling from '../../../Pagination/PaginationInfiniteScrolling';
import { IProduct } from '@/types/app/models/IProduct.type';
import { ProductFunApiPaginationAttributes, ProductFunApiSearchAttributes } from '@/types/app/api/product.type';
import { IPaginationResponse } from '@/types/app/models/IPaginationResponse.type';
import { useActions } from '@/hooks';
import { RootState } from '@/redux/store';
import { selectedProducts } from '@/redux/selectors/product';
import PCard from '@/components/ui/elements/card/PrimaryCard/PrimaryCard';

interface ProductListProps {
    searchQuery: string;
    initialProducts: IProduct[];
    getProductsData: (
        search: ProductFunApiSearchAttributes,
        {
            isPagination,
            currentPage
        }: ProductFunApiPaginationAttributes
    ) => Promise<IPaginationResponse<IProduct>>;
    totalProductCount: number;
}

const ProductList: FC<ProductListProps> = ({searchQuery, getProductsData, initialProducts, totalProductCount}) => {
    const LIMIT = 18;

    const {setProductList, incrementCurrentPage} = useActions()
    const productSelector = (state: RootState) => selectedProducts(state)
    const productCurrentPageSelector = (state: RootState) => state.productReduser.currentPage

    return (
        <>
        <PaginationInfiniteScrolling<
            IProduct,

            ProductFunApiSearchAttributes,
            ProductFunApiPaginationAttributes
        >
            searchQuery={searchQuery}
            actions={{
                setDataList: setProductList,
                incrementCurrentPage: incrementCurrentPage
            }}
            getData={getProductsData}
            initialData={initialProducts}
            limit={LIMIT}
            totalDataCount={totalProductCount}
            selectors={{
                dataSelector: productSelector,
                currentPageSelector: productCurrentPageSelector
            }}
            mapItems={(item) =><PCard item={item}/>}
        />
        </>
    );
};

export default ProductList;
