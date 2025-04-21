import styles from "./similarProducts.module.scss";
import ProductList from '@/features/ProductList/ProductList';
import { ProductError } from "@/types/app/enum/product.enum";
import { IPaginationProduct, IProduct } from '@/types/app/models/IProduct.type';
import { IProductDetails } from "@/types/app/models/IProductDetails.type";
import { getSimilarPaginationProducts } from "@/entities/service/api/product.api";
import { HeadingH } from "@/shared/plagins/H.number";
import {FC} from 'react';

interface SimilarProductsProps {
    data: IProductDetails
}

const SimilarProducts: FC<SimilarProductsProps> = async ({data}) => {
    const currentPage = 1
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

    if (categorySlug && products && productsCount !== null && productsCount > 0) {
        return (
            <>
            <HeadingH
                level={3}
                content={"Similar products"}
                className={styles.similarTitle}
            />
            <ProductList
                totalProductCount={productsCount}
                initialProducts={products}
                getProductsData={getSimilarPaginationProducts}
                classNameListDataContainer={styles.similarProductsList}
            />
            </>
        );
    } else {
        return (<HeadingH level={3} content={ProductError.ProductNotFound}/>)
    }
};

export default SimilarProducts;
