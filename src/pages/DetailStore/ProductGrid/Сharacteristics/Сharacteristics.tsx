import {FC} from 'react';

import styles from './characteristics.module.scss';
import { HeadingH } from '@/widgets/plagins/H.number';
import { IProduct } from '@/types/app/models/IProduct.type';
import RatingCard from '@/shared/Card/CardElements/CardMiddleWrap/RatingCard/RatingCard';
import Price from '@/shared/Card/CardElements/CardMiddleWrap/Price/Price';
import { List } from '@/widgets/ui/list/List';
import { Item } from '@/widgets/ui/list/item/Item';


interface СharacteristicsProps {
    product: IProduct
}

const Сharacteristics: FC<СharacteristicsProps> = ({product}) => {
    return (
        <div className="product__page-characteristics">
            <div className="product__characteristics-title__wrapper">
                <HeadingH
                    className={styles.titleCardAuthor}
                    level={4}
                    content={product.title}
                />
            </div>
            <div className="product__characteristics-review__wrapper">
                <RatingCard />
            </div>
            <div className="product__characteristics-price__wrapper">
                <Price price={product.price_discount} priceDiscount={product.price} />
            </div>

            <div className="product__full-description">
                <List
                    items={[
                        {
                            id: 1,
                            label: "Модель",
                            data: "Iphone 6"
                        },
                        {
                            id: 2,
                            label: "Память",
                            data: "64 гб"
                        },
                        {
                            id: 3,
                            label: "Озу",
                            data: "3 гб"
                        },
                        {
                            id: 4,
                            label: "Процессор",
                            data: "Intel Core i7 7700"
                        },
                    ]}
                    className="image__slider-list"
                    mapItems={(item) => (
                        <Item className='product__char-container'>
                            <div className="product__char-label">
                                <span>{item.label}</span>
                            </div>
                            <div className="product__char-data">
                                <span>{item.data}</span>
                            </div>
                        </Item>
                    )}
                />
            </div>
        </div>
    );
};

export default Сharacteristics;
