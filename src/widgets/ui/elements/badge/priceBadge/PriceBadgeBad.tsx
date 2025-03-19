import {FC} from 'react';

import styles from './priceBadge.module.scss';

interface PriceBadgeBadProps {}

const PriceBadgeBad: FC<PriceBadgeBadProps> = () => {
    return (
        <div className={styles.PriceBadgeBad}>Content</div>
    );
};

export default PriceBadgeBad;