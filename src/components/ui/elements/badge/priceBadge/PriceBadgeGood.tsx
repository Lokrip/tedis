import {FC} from 'react';

import styles from './priceBadge.module.scss';

interface PriceBadgeGoodProps {}

const PriceBadgeGood: FC<PriceBadgeGoodProps> = () => {
    return (
        <div className={styles.PriceBadgeGood}>Content</div>
    );
};

export default PriceBadgeGood;