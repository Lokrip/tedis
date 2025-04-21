import {FC} from 'react';

import styles from './characteristics.module.scss';
import { HeadingH } from '@/shared/plagins/H.number';
import RatingCard from '@/widgets/Card/CardElements/CardMiddleWrap/RatingCard/RatingCard';
import Price from '@/widgets/Card/CardElements/CardMiddleWrap/Price/Price';
import { List } from '@/shared/list/List';
import { Item } from '@/shared/list/item/Item';
import { IProductDetails } from '@/types/app/models/IProductDetails.type';
import TextPl from '@/shared/plagins/P.number';


interface СharacteristicsProps {
    product: IProductDetails
}

const Сharacteristics: FC<СharacteristicsProps> = ({product}) => {
    return (
        <div className="product__page-characteristics">
            <div className={styles.productCharacteristicsTitleWrapper}>
                <HeadingH
                    className={styles.titleCard}
                    level={4}
                    content={product.title}
                />
            </div>
            <div className={styles.productCharacteristicsReviewWrapper}>
                <RatingCard />
            </div>
            <div className={styles.productCharacteristicsPriceWrapper}>
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
                                <TextPl
                                    as="span"
                                    maxLength={30}
                                >
                                    {item.label}
                                </TextPl>
                            </div>
                            <div className="product__char-data">
                                <TextPl
                                    as="span"
                                    maxLength={60}
                                >
                                    {item.data}
                                </TextPl>
                            </div>
                        </Item>
                    )}
                />
            </div>
        </div>
    );
};

export default Сharacteristics;
