import {FC, PropsWithChildren} from 'react';

import styles from './card.module.scss';

interface CardProps extends PropsWithChildren {}

const Card: FC<CardProps> = ({children}) => {
    return (
        <div className={styles.productCard}>
            {children}
        </div>
    );
};

export default Card;