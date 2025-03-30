import {FC} from 'react';

import styles from "./price.module.scss"

import { CircleDollarSign } from 'lucide-react';

import clsx from 'clsx';
import { HeadingH } from '@/widgets/plagins/H.number';
import TextPl from '@/widgets/plagins/P.number';

interface PriceProps {
    price: number | string;
    priceDiscount: number | string;
}

const Price: FC<PriceProps> = ({price, priceDiscount}) => {
    return (
        <div className={clsx(styles.productCardPrice, 'price', 'flex-center')}>
            <div className={clsx(styles.priceWrap, "flex-center")}>
                <HeadingH level={4} content={priceDiscount} />
                <CircleDollarSign height={20} width={20} />
            </div>

            <div className={clsx(styles.priceDiscount, 'flex-center')}>
                <TextPl as='p' maxLength={9}>
                    {price}
                </TextPl>
                <CircleDollarSign height={15} width={15} />
            </div>
        </div>
    );
};

export default Price;
