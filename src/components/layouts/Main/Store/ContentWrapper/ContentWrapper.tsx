import {FC} from 'react';
import styles from './contentWrapper.module.scss';
import { IPaginationProduct } from '@/types/app/models/IProduct.type';
import ProductList from './ProductList/ProductList';
import { getProductsData } from '@/core/api/product.api';
import { ProductError } from '@/types/app/enum/product.enum';
import { HeadingH } from '@/components/plagins/H.number';
import { getServerSession } from 'next-auth';
import { JWTUser } from '@/types/app/auth.types';
import { authOptions } from '@/auth';

interface ContentWrapperProps {
    param?: any;
}

const ContentWrapper: FC<ContentWrapperProps> = async ({param}) => {
    const session = await getServerSession(authOptions);
    const accessToken = (session?.user as JWTUser).accessToken
    const searchQuery = param.q ?? param.searchQuery;
    const currentPage = Number(param?.page) || 1;

    try {
        const {results: products, count: totalProductCount} = await getProductsData<IPaginationProduct>(
            searchQuery,
            {isPagination: true,
            currentPage: currentPage},
            accessToken
        )

        return (
            <ProductList
                searchQuery={searchQuery}
                totalProductCount={totalProductCount}
                initialProducts={products}
                getProductsData={getProductsData}
                classNameListDataContainer={styles.productContentWrapper}
            />
        );
    } catch(error) {
        const productNotFound = ProductError.ProductNotFound

        return (
            <HeadingH
                level={2}
                content={productNotFound ?? "Data list not available"}
            />
        );
    }
};

export default ContentWrapper;
