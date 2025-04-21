import {FC} from 'react';
import styles from './text.module.scss';
import { PTextProps } from './_p-type';

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
