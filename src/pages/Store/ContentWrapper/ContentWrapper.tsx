import {FC} from 'react';
import styles from './contentWrapper.module.scss';
import { IPaginationProduct } from '@/types/app/models/IProduct.type';
import { getProductsData, getProductsPaginationData } from '@/utils/service/api/product.api';
import { ProductError } from '@/types/app/enum/product.enum';
import { HeadingH } from '@/widgets/plagins/H.number';
import ProductList from '@/features/ProductList/ProductList';

interface ContentWrapperProps {
    param?: any;
    dynamicParam?: {slug: string};
}

const ContentWrapper: FC<ContentWrapperProps> = async ({param, dynamicParam}) => {
    const searchQuery = param.q ?? param.searchQuery;
    const category_slug = dynamicParam?.slug

    try {
        const {results: products, count: totalProductCount} = await getProductsData<IPaginationProduct>(
            searchQuery,
            category_slug ?? ""
        )
        return (
            <>{products ? (
                <ProductList
                    searchQuery={searchQuery}
                    totalProductCount={totalProductCount}
                    initialProducts={products}
                    getProductsData={getProductsPaginationData}
                    classNameListDataContainer={styles.productContentWrapper}
                />
            ) : <HeadingH
                level={2}
                content={ProductError.ProductNotFound}
            />}</>
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
