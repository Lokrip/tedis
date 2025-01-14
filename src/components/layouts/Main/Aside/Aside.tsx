import {FC, useCallback, useEffect, useState} from 'react';

import clsx from 'clsx'

import { List } from "../../../ui/list/List"
import { Item } from "../../../ui/list/item/Item"

import { getIconComponent } from "../../../../utils"
import { HeadingH } from "../../../plagins/H.number"
import ShadowBackground from "../../../ui/assets/shadowBackground/ShadowBackground"

import styles from './aside.module.scss';

interface AsideProps {
    isOpen: boolean;
    close: (action: boolean) => void;
    data: any
}

const Aside: FC<AsideProps> = ({isOpen, close, data}) => {

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
                <div className="modelContainerMenuTitle">
                        <HeadingH 
                            content={'Categoryes'} 
                            level={1} 
                            className="modelMenuTitle"
                        />
                </div>
                <List 
                    className={clsx("menu-list", styles.menuListHeader)}
                    items={data}
                    mapItems={(item) => {
                        const IconComponent = getIconComponent(item.icon); 
                        return (
                            <div className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                <IconComponent />
                                <Item className="menu-items menu-items-header">
                                    {item.label}
                                </Item>
                            </div>
                        )
                    }}
                />
            </div>
        </aside>
    );
};

export default Aside;