import {FC} from 'react';

import styles from './priceBadge.module.scss';
import ButtonSet from '../../button/ButtonSet';
import { ClassNameType } from '@/types/react.type';
import { correctClass } from '@/utils/utils';

interface PriceBadgeProps extends ClassNameType {
    content: React.ReactNode,
    icon?: React.ReactNode;
}

const PriceBadge: FC<PriceBadgeProps> = ({ content, icon, className }) => {
    const classNameValid = correctClass(styles.PriceBadge, className!);

    return (
        <div className={classNameValid}>
            <ButtonSet buttonType="btnV4">
                {icon}
                <p className='PriceBadgeContent'>
                    {content}
                </p>
            </ButtonSet>
        </div>
    );
};

export default PriceBadge;