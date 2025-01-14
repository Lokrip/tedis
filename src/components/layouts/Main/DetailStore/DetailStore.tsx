import {FC} from 'react';

import styles from './detailStore.module.scss';
import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { MainDetailStore } from './MainDetailStore/MainDetailStore';
import ProductGrid from './ProductGrid/ProductGrid';
import { IParamPrimaryType } from '../../../../types/react.type';

interface DetailStoreProps extends IParamPrimaryType {}

const DetailStore: FC<DetailStoreProps> = ({param}) => {
    return (
        <MainDetailStore>
            <MainDetailStore.Breadcrumbs>
                <Breadcrumbs />
            </MainDetailStore.Breadcrumbs>
            <MainDetailStore.ProductGrid>
                <ProductGrid param={param} />
            </MainDetailStore.ProductGrid>
        </MainDetailStore>
    );
};

export default DetailStore;