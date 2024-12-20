import {FC} from 'react';

import styles from './price.module.scss';
import { HeadingH } from '@/components/plagins/H.number';
import { CircleDollarSign } from 'lucide-react';
import TextPl from '@/components/plagins/P.number';

interface PriceProps {}

const Price: FC<PriceProps> = () => {
    return (
        <div className='product-card__price price'>
            <div className="price__wrap">
                <HeadingH level={4} content={"1289"} />
                <CircleDollarSign />
            </div>

            <div className="price__discount">
                <TextPl as='p' maxLength={9}>
                    1243
                </TextPl>
            </div>
        </div>
    );
};

export default Price;