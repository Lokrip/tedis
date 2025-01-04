import { FC, memo } from 'react';

import styles from './сardBottomWrap.module.scss';
import ButtonSet from '../../../button/ButtonSet';

interface CardBottomWrapProps {}

const CardBottomWrap: FC<CardBottomWrapProps> = () => {
    return (
        <div className={styles.cardBottomWrap}>
            <ButtonSet buttonType="primary">
                Добавить в корзину
            </ButtonSet>
        </div>
    );
};

export default memo(CardBottomWrap);