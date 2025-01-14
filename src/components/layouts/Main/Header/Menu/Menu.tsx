"use client"

import { useQuery } from "@tanstack/react-query"

import styles from "./menu.module.scss"
import axios from 'axios'
import clsx from 'clsx'

import {FC, memo, PropsWithChildren, useEffect } from "react"

import { Menu } from 'lucide-react';
import { useActions, useAppSelector } from "../../../../../hooks"
import Aside from "../../Aside/Aside"


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
    const { data, isError, error } = useQuery({
        queryKey: ['category'],
        queryFn: getData,
    })

    const { onOpenCloseMenu } = useActions();
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

            {openMenu && (
                <Aside 
                    isOpen={openMenu} 
                    close={onOpenCloseMenu} 
                    data={data}
                />
            )}
        </MenuHeader>
    )
}