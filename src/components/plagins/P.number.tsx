import {FC, PropsWithChildren} from 'react';

import styles from './text.module.scss';
import { ClassNameType } from '@/types/react.type';

interface PTextProps extends PropsWithChildren, ClassNameType {
    as?: 'p' | 'span';
    maxLength?: number;
}

const TextPl: FC<PTextProps> = ({
    as: Component = "p",
    maxLength,
    children, 
}) => {
    const renderText = () => {
        if(typeof children === 'string' && maxLength && children.length > maxLength) {
            return `${children.slice(0, maxLength)}...`;
        }

        return children;
    }

    return (
        <Component className={styles.ptext}>
            {renderText()}
        </Component>
    );
};

export default TextPl;