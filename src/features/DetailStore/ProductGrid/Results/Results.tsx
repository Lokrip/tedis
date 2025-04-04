import {FC} from 'react';

import Price from '@/shared/Card/CardElements/CardMiddleWrap/Price/Price';
import PriceBadgeVeryGood from '@/widgets/ui/elements/badge/priceBadge/PriceBadgeVeryGood';
import ButtonSet from '@/widgets/ui/elements/button/ButtonSet';
import { IProductDetails } from '@/types/app/models/IProductDetails.type';


interface ResultsProps {
    product: IProductDetails
}

const Results: FC<ResultsProps> = () => {
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
