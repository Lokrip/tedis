"use client"

import { useQuery } from "@tanstack/react-query"

import axios from 'axios'

import {PropsWithChildren, useEffect } from "react"

import { Menu } from 'lucide-react';
import { useActions, useAppSelector } from "../../../../../hooks"
import Aside from "../../Aside/Aside"
import ButtonSet from "@/components/ui/elements/button/ButtonSet"


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
            <ButtonSet onClick={onOpenMunu} buttonType="primary">
                <div className="icon">
                    <Menu/>
                </div>
                <div>
                    Каталог
                </div>
            </ButtonSet>

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
