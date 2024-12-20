import {FC} from 'react';

import styles from './cardMiddleWrap.module.scss';
import Price from './Price/Price';

interface CardMiddleWrapProps {}

const CardMiddleWrap: FC<CardMiddleWrapProps> = () => {
    return (
        <div className={styles.cardMiddleWrap}>
            <Price />
        </div>
    );
};

export default CardMiddleWrap;