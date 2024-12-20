import clsx from 'clsx'
import styles from './shadowBackground.module.scss'
import { ClassNameType } from '@/types/react.type';
import { correctClass } from '@/utils/utils';

interface ShadowBackgroundTypes extends ClassNameType {
    onClick: () => void;
}

export default function ShadowBackground<P extends ShadowBackgroundTypes>({onClick, className}: P) {
    const classNameValid = correctClass(clsx(styles.shadow, 'fixed-full', 'width-full', 'height-full'), className!)
    
    return (
        <div onClick={onClick} className={classNameValid}></div>
    )
}