"use client"

import {FC, Suspense} from 'react';

import styles from './productList.module.scss';
import PaginationInfiniteScrolling from '@/shared/Pagination/PaginationInfiniteScrolling';
import { IProduct } from '@/types/app/models/IProduct.type';
import { ProductFunApiPaginationAttributes, ProductFunApiSearchAttributes } from '@/types/app/api/product.type';
import { IPaginationResponse } from '@/types/app/models/IPaginationResponse.type';
import { RootState } from '@/redux/store';
import { selectedProducts } from '@/redux/selectors/product';
import dynamic from 'next/dynamic';
import SkeletonSingleProductCard from '@/widgets/ui/elements/skeleton/SkeletonSingleProductCard';
import { useActions } from '@/utils/hooks';

const PCard = dynamic(() => import('@/shared/Card/PrimaryCard/PrimaryCard'), {
    loading: () => (
        <SkeletonSingleProductCard />
    )
})

interface ProductListProps {
    searchQuery?: ProductFunApiSearchAttributes;
    initialProducts: IProduct[];
    getProductsData: (
        search: ProductFunApiSearchAttributes,
        {
            isPagination,
            currentPage
        }: ProductFunApiPaginationAttributes
    ) => Promise<IPaginationResponse<IProduct>>;
    totalProductCount: number;
    classNameListDataContainer: string;
}

const ProductList: FC<ProductListProps> = ({
    searchQuery,
    getProductsData,
    initialProducts,
    totalProductCount,
    classNameListDataContainer
}) => {
    const LIMIT = 18;

    const {setProductList, incrementCurrentPage, changeTypeFetching} = useActions()

    const productSelector = (state: RootState) => selectedProducts(state)
    const productCurrentPageSelector = (state: RootState) => state.productReduser.currentPage
    const productFetchingSelector = (state: RootState) => state.productReduser.isFetching


    return (
        <>
        <PaginationInfiniteScrolling<
            IProduct,

            ProductFunApiSearchAttributes,
            ProductFunApiPaginationAttributes
        >
            searchQuery={searchQuery ?? null}
            actions={{
                setDataList: setProductList,
                incrementCurrentPage: incrementCurrentPage,
                changeTypeFetching: changeTypeFetching
            }}
            classNameListDataContainer={classNameListDataContainer}
            getData={getProductsData}
            initialData={initialProducts}
            limit={LIMIT}
            totalDataCount={totalProductCount}
            selectors={{
                dataSelector: productSelector,
                currentPageSelector: productCurrentPageSelector,
                fetchingSelector: productFetchingSelector
            }}
            mapItems={(item) => <PCard item={item}/>}
        />
        </>
    );
};

export default ProductList;
