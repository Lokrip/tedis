"use client"

import { useQuery } from "@tanstack/react-query"

import styles from "./menu.module.scss"
import axios from 'axios'
import clsx from 'clsx'

import {FC, memo, PropsWithChildren, useEffect } from "react"


import { List } from "@/components/ui/list/List"
import { Item } from "@/components/ui/list/item/Item"

import { Menu } from 'lucide-react';
import { useActions, useAppSelector } from "@/hooks/useHooks"
import { getIconComponent } from "@/utils/utils"
import { HeadingH } from "@/components/plagins/H.number"
import ShadowBackground from "@/components/ui/assets/shadowBackground/ShadowBackground"


interface CategoryCharType {
    id: number;
    label: string;
}

interface CategoryListType {
    id: number;
    label: string;
    categoryChar: CategoryCharType[]
}

interface ICategory {categoryList: CategoryListType[]}

async function getData() {
    try {
        const response = await axios.get<ICategory>('/api/v1/header')
        return response.data.categoryList
    } catch(error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

export function MenuHeader<P extends PropsWithChildren>({children}: P) {
    return (
        <div className="menu menu-header">
            {children}
        </div>
    )
}

const MenuButton: FC<{onOpenMunu: () => void}> = memo(({onOpenMunu}) => (
    <div onClick={onOpenMunu} className={clsx(styles.menuButton, 'menu-button-icon')}>
        <div className="icon">
            <Menu/>
        </div>
        <div>
            Каталог
        </div>
    </div>
))

MenuButton.displayName = "MenuButton";

export default function MenuH(): JSX.Element {
    const { data, isError, error, isSuccess } = useQuery({
        queryKey: ['category'],
        queryFn: getData,
    })

    const {onOpenCloseMenu} = useActions();
    const { openMenu } = useAppSelector(state => state.headerReduser)

    useEffect(() => {
        if (isError) {
            console.error('Error:', error);
        }
    }, [isError, error]);


    const onOpenMunu = () => {
        onOpenCloseMenu(!openMenu)
    }

    return (
        <MenuHeader>
            <MenuButton onOpenMunu={onOpenMunu} />
            
            <aside className={clsx(styles.modelMenu, 'fixed-full', 'mixed-full-width', openMenu && styles.active)}>
                <ShadowBackground onClick={() => {onOpenCloseMenu(false)}} />
                
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
        </MenuHeader>
    )
}