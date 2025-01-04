import {FC} from 'react';

import styles from './priceBadge.module.scss';

interface PriceBadgeAverageProps {}

const PriceBadgeAverage: FC<PriceBadgeAverageProps> = () => {
    return (
        <div className={styles.PriceBadgeAverage}>Content</div>
    );
};

export default PriceBadgeAverage;