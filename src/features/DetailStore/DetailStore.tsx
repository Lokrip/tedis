import {FC} from 'react';

import Breadcrumbs from './Breadcrumbs/Breadcrumbs';
import { MainDetailStore } from './MainDetailStore/MainDetailStore';
import ProductGrid from './ProductGrid/ProductGrid';
import { Container } from '@/shared/Container/Container';
import { IParamPrimaryType } from '@/types/react.type';
import { getProductData } from '@/entities/service/api/product.api';
import SimilarProducts from './SimilarProducts/SimilarProducts';

type DetailStoreProps = IParamPrimaryType

const DetailStore: FC<DetailStoreProps> = async ({param}) => {
    const data = await getProductData(param);

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
                    <SimilarProducts data={data}/>
                </MainDetailStore.SimilarProducts>
            </Container>
        </MainDetailStore>
    );
};

export default DetailStore;
