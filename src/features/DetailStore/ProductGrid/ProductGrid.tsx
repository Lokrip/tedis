import {FC} from 'react';

import styles from './productGrid.module.scss';
import Сharacteristics from "./Сharacteristics/Сharacteristics"
import Results from './Results/Results';
import ImageContainerProduct from './ImageContainerProduct/ImageContainerProduct';
import clsx from 'clsx';
import { IProductDetails } from '@/types/app/models/IProductDetails.type';

interface ProductGridProps {
    data: IProductDetails;
}

const ProductGrid: FC<ProductGridProps> = async ({data}) => {
    return (
        <div className={(clsx(styles.productGrid))}>
            <div className="product__page-main-slider">
                <ImageContainerProduct product={data}/>
            </div>
            <Сharacteristics product={data} />
            <Results product={data} />
        </div>
    );
};

export default ProductGrid;
