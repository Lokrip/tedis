"use client"

import {FC, Fragment, useEffect} from 'react';

import styles from './productList.module.scss';
import { IProduct } from '@/types/app/models/IProduct.type';
import PCard from '@/components/ui/elements/card/PrimaryCard/PrimaryCard';
import { useActions, useAppSelector } from '@/hooks';
import { selectedProducts } from '@/redux/selectors/product';

interface ProductListProps {
    initialProduct: IProduct[]
}

const ProductList: FC<ProductListProps> = ({initialProduct}) => {
    const products = useAppSelector(state => selectedProducts(state))
    const {setProductList} = useActions()

    useEffect(() => {
        setProductList({products: initialProduct})
    }, [initialProduct])

    return (
        <>{products.map(item => (
            <Fragment key={item.slug}>
                <PCard item={item}/>
            </Fragment>
        ))}</>
    );
};

export default ProductList;
