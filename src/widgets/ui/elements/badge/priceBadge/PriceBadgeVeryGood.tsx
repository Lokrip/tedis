import {FC, PropsWithChildren} from 'react';

import styles from './priceBadge.module.scss';
import PriceBadge from './PriceBadge';
import { ThumbsUp } from 'lucide-react';

interface PriceBadgeVeryGoodProps extends PropsWithChildren {}

const PriceBadgeVeryGood: FC<PriceBadgeVeryGoodProps> = ({children}) => {
    return (
        <PriceBadge
            icon={<ThumbsUp />}
            content={children}
            className={'priceBadgeVeryGood'}
        />
    )
};

export default PriceBadgeVeryGood;