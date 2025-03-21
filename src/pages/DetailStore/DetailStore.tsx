import {FC} from 'react';

import styles from './detailStore.module.scss';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { MainDetailStore } from './MainDetailStore/MainDetailStore';
import ProductGrid from './ProductGrid/ProductGrid';
import clsx from 'clsx';
import { Container } from '@/widgets/module/Container/Container';
import { IParamPrimaryType } from '@/types/react.type';

interface DetailStoreProps extends IParamPrimaryType {}

const DetailStore: FC<DetailStoreProps> = ({param}) => {
    return (
        <MainDetailStore className={"main-indent-block"}>
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
