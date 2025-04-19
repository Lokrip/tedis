import { FC } from 'react';

import clsx from 'clsx'

import ShadowBackground from "../ui/assets/shadowBackground/ShadowBackground"

import styles from './aside.module.scss';
import { AsideProps } from './aside.type';
import { CategoriesList } from '@/features/Categories';

const Aside: FC<AsideProps> = ({isOpen, close}) => {
    const handlerCloseMenu = () => {close(false)}
    return (
        <aside className={clsx(
            styles.modelMenu,
            'fixed-full',
            'mixed-full-width',
            isOpen && styles.active
        )}>
            <ShadowBackground onClick={handlerCloseMenu} />
            <CategoriesList classActive={styles.active} isOpen={isOpen} />
        </aside>
    );
};

export default Aside;
