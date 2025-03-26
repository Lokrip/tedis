import {FC} from 'react';

import styles from './detailStore.module.scss';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { MainDetailStore } from './MainDetailStore/MainDetailStore';
import ProductGrid from './ProductGrid/ProductGrid';
import { Container } from '@/widgets/module/Container/Container';
import { IParamPrimaryType } from '@/types/react.type';
import { getProductData, getSimilarPaginationProducts } from '@/utils/service/api/product.api';
import SimilarProducts from './SimilarProducts/SimilarProducts';
import { IPaginationProduct, IProduct } from '@/types/app/models/IProduct.type';

interface DetailStoreProps extends IParamPrimaryType {}

const DetailStore: FC<DetailStoreProps> = async ({param}) => {
    const currentPage = 1
    const data = await getProductData(param);

    let products: IProduct[] | null = null;
    let productsCount: number | null = null

    const categorySlug = data.category?.slug ?? null;

    if (categorySlug) {
        const {results, count} = await getSimilarPaginationProducts<IPaginationProduct>(
            {currentPage},
            categorySlug
        );
        products = results
        productsCount = count
    }

    return (
        <MainDetailStore className={"main-indent-block"}>
            <Container>
                <MainDetailStore.Breadcrumbs>
                    <Breadcrumbs />
                </MainDetailStore.Breadcrumbs>
                <MainDetailStore.ProductGrid>
                    <ProductGrid data={data} />
                </MainDetailStore.ProductGrid>
                <MainDetailStore.SimilarProducts>
                    {categorySlug && products && productsCount !== null && (
                        <SimilarProducts
                            products={products}
                            totalProductCount={productsCount}
                            getProductsData={getSimilarPaginationProducts}
                        />
                    )}
                </MainDetailStore.SimilarProducts>
            </Container>
        </MainDetailStore>
    );
};

export default DetailStore;
