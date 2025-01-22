import {FC} from 'react';

import styles from './detailStore.module.scss';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { MainDetailStore } from './MainDetailStore/MainDetailStore';
import ProductGrid from './ProductGrid/ProductGrid';
import { IParamPrimaryType } from '../../../../types/react.type';
import clsx from 'clsx';
import { Container } from '@/components/module/Container/Container';

interface DetailStoreProps extends IParamPrimaryType {}

const DetailStore: FC<DetailStoreProps> = ({param}) => {
    return (
        <MainDetailStore className={
            clsx(
                styles.layoutDetailStore,
                "main-indent-block"
            )
        }>
            <Container>
                <MainDetailStore.Breadcrumbs>
                    <Breadcrumbs />
                </MainDetailStore.Breadcrumbs>
                <MainDetailStore.ProductGrid>
                    <ProductGrid param={param} />
                </MainDetailStore.ProductGrid>
            </Container>
        </MainDetailStore>
    );
};

export default DetailStore;
