import {FC} from 'react';

import styles from './cardMiddleWrap.module.scss';
import Price from './Price/Price';
import TitleCard from './TitleCard/TitleCard';
import RatingCard from './RatingCard/RatingCard';
import { IParamPrimaryType } from '@/types/react.type';

interface CardMiddleWrapProps extends IParamPrimaryType {
    price: number | string;
    priceDiscount: number | string;
    // author: string;
    title: string;
    // rating: {};
}

const CardMiddleWrap: FC<CardMiddleWrapProps> = ({
    price, 
    priceDiscount, 
    title,
    param
}) => {
    return (
        <div className={styles.cardMiddleWrap}>
            <Price 
                price={price} 
                priceDiscount={priceDiscount} 
            />
            <TitleCard 
                title={title} 
                param={param}
            />
            <RatingCard />
        </div>
    );
};

export default CardMiddleWrap;