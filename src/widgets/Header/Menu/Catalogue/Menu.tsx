"use client"

import {PropsWithChildren } from "react"

import { Menu } from 'lucide-react';
import Aside from "../../../Aside/Aside"
import ButtonSet from "@/widgets/ui/elements/button/ButtonSet"
import { useActions, useAppSelector } from "@/utils/hooks";


export function MenuHeader<P extends PropsWithChildren>({children}: P) {
    return (
        <div className="menu menu-header">
            {children}
        </div>
    )
}


export default function MenuH(): JSX.Element {
    const { onOpenCloseMenu } = useActions();
    const { openMenu } = useAppSelector(state => state.headerReduser)

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
            <Aside
                isOpen={openMenu}
                close={onOpenCloseMenu}
            />
        </MenuHeader>
    )
}
