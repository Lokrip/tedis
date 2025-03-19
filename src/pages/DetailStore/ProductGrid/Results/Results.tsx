import {FC} from 'react';

import styles from './results.module.scss';
import Price from '../../../../ui/elements/card/CardElements/CardMiddleWrap/Price/Price';
import PriceBadgeVeryGood from '../../../../ui/elements/badge/priceBadge/PriceBadgeVeryGood';
import ButtonSet from '../../../../ui/elements/button/ButtonSet';
import { IPost } from '../../../../../types/app/models/IPost.type';

interface ResultsProps {
    product: IPost
}

const Results: FC<ResultsProps> = ({product}) => {
    return (
        <div className="product__page-results">
            <div className="product__results-price__wrapper">
                <Price price={"1234"} priceDiscount={"1234"} />
            </div>
            <div className="product__results-price-type__wrappper">
                <PriceBadgeVeryGood>
                    Хорошая цена
                </PriceBadgeVeryGood>
            </div>
            <div className="product_results-insertion-into-basket">
                <ButtonSet buttonType="primary">
                    Добавить в корзину
                </ButtonSet>
            </div>
        </div>
    );
};

export default Results;
