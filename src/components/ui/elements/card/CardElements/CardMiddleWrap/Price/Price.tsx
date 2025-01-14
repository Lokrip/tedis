import {FC} from 'react';

import styles from "./price.module.scss"
import { HeadingH } from '../../../../../../plagins/H.number';
import { CircleDollarSign } from 'lucide-react';
import TextPl from '../../../../../../plagins/P.number';
import clsx from 'clsx';

interface PriceProps {
    price: number | string;
    priceDiscount: number | string;
}

const Price: FC<PriceProps> = ({price, priceDiscount}) => {
    return (
        <div className={clsx(styles.productCardPrice, 'price', 'flex-center')}>
            <div className={clsx(styles.priceWrap, "flex-center")}>
                <HeadingH level={4} content={price} />
                <CircleDollarSign height={20} width={20} />
            </div>

            <div className={clsx(styles.priceDiscount, 'flex-center')}>
                <TextPl as='p' maxLength={9}>
                    {priceDiscount}
                </TextPl>
                <CircleDollarSign height={15} width={15} />
            </div>
        </div>
    );
};

export default Price;