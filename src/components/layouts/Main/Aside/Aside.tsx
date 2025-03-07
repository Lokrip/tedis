import {FC, useCallback, useEffect, useState} from 'react';

import clsx from 'clsx'

import { List } from "../../../ui/list/List"
import { Item } from "../../../ui/list/item/Item"

import { getIconComponent } from "../../../../utils"
import { HeadingH } from "../../../plagins/H.number"
import ShadowBackground from "../../../ui/assets/shadowBackground/ShadowBackground"

import styles from './aside.module.scss';
import { catalogParamApi } from '@/redux/services/shop/CatalogService';
import Link from 'next/link';

interface AsideProps {
    isOpen: boolean;
    close: (action: boolean) => void;
    data: any
}

const Aside: FC<AsideProps> = ({isOpen, close, data}) => {
    const {data: categories} = catalogParamApi.useFetchAllCategoryParamQuery(undefined);
    const [isRendered, setIsRendered] = useState(false);
    const [isClosing, setIsClosing] = useState(false);

    useEffect(() => {
        if(isOpen) {
            setIsRendered(true);
            setIsClosing(false);
        }
    }, [isOpen])

    useEffect(() => {
        if(!isRendered && isClosing) {
            const timeout = setTimeout(() => {
                close(false)
            }, 100)

            return () => {
                clearTimeout(timeout)
            }
        }
    }, [isRendered, isClosing, close])

    const handleClose = useCallback(() => {
        setIsClosing(true);
        setIsRendered(false);
    }, []);

    return (
        <aside className={clsx(
            styles.modelMenu,
            'fixed-full',
            'mixed-full-width',
            isRendered && styles.active)
        }>
            <ShadowBackground onClick={handleClose} />

            <div className={
                clsx(
                    "model-menu-items",
                    styles.modelMenuItemsHeader,
                )
            }>
                <List
                    className={clsx("menu-list", styles.menuListHeader)}
                    items={categories}
                    mapItems={(item) => {
                        const IconComponent = getIconComponent(item.icon);
                        return (
                            <Link href={""} className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                <IconComponent />
                                <Item className="menu-items menu-items-header">
                                    {item.title}
                                </Item>
                            </Link>
                        )
                    }}
                />
            </div>
        </aside>
    );
};

export default Aside;
