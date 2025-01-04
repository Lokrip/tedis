import {FC} from 'react';

import styles from './priceBadge.module.scss';

interface PriceBadgeVeryBadProps {}

const PriceBadgeVeryBad: FC<PriceBadgeVeryBadProps> = () => {
    return (
        <div className={styles.PriceBadgeVeryBad}>Content</div>
    );
};

export default PriceBadgeVeryBad;