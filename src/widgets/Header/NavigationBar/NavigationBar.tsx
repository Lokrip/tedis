"use client"
import {FC, useEffect, useState} from 'react';

import Link from "next/link";
import styles from './navigationBar.module.scss';
import { List } from '../../ui/list/List';
import { Item } from '../../ui/list/item/Item';
import { getIconComponent } from '../../../utils/utils';
import { useSession } from "next-auth/react";
import clsx from 'clsx';
import ButtonSet from '@/widgets/ui/elements/button/ButtonSet';
import { usePathname } from 'next/navigation';
import { useActions, useAppSelector } from '@/utils/hooks';
import DropdownMenu from '../../../shared/drop-down/DropdownMenu';

const NavigationBar: FC = () => {
    const [navigations, setNavigation] = useState([
        {id: 1, navigation: "/cn/basket", type: "basket", titleNavigation: "Корзина", icon: "ShoppingCart"},
        {id: 2, navigation: "/cy/contacts", type: "contacts", titleNavigation: "Контакт", icon: "BookUser"},
        {id: 3, navigation: "/account/login", type: "sign-in", titleNavigation: "Войти", icon: "User"},
    ])
    const {openDropDownMenu} = useAppSelector(state => state.menuReducer)
    const {modalOpen, toggleMenu, savedScrollsPositionToInit} = useActions()
    const pathname = usePathname()
    const session = useSession()

    useEffect(() => {
        console.log(session)
        if(session.status == "authenticated") {
            setNavigation(prev => {
                return prev.some(nav => nav.type === "menu")
                    ? prev.filter(nav => nav.type !== "sign-in")
                    : [
                        ...prev.filter(nav => nav.type !== "sign-in"),
                        {
                            id: Date.now(),
                            type: "menu",
                            navigation: "",
                            titleNavigation: "Меню",
                            icon: "Menu"
                        }
                    ];
            });
        }
    }, [session])

    const onClickNavigationItem = (type: string) => {
        if(type === "sign-in") {
            modalOpen({
                title: "Login Modal",
                content: "Authenticated Modal",
            })
            savedScrollsPositionToInit({
                scrollPosition: window.scrollY
            })
        }
    }

    const handleOpenDropDownMenu = () => {
        toggleMenu()
    }


    return (
        <List
            className={clsx('navigration-list', "flex-center")}
            items={navigations}
            mapItems={(item) => {
                const IconComponent = getIconComponent(item.icon);
                if(!item.navigation && item.type === "menu") {
                    return (
                        <div onClick={handleOpenDropDownMenu} className={styles.navigationMenu}>
                            <ButtonSet buttonType="primary" className={styles.navigationWrapper}>
                                <Item className={"navigration-item"}>
                                    {item.titleNavigation}
                                </Item>
                                <IconComponent />
                            </ButtonSet>
                            {openDropDownMenu && <DropdownMenu />}
                        </div>
                    )
                }
                return (
                    <Link onClick={() => onClickNavigationItem(item.type)} href={item.type === "sign-in" ? `${item.navigation}?callback=${pathname}` : item.navigation}>
                        <ButtonSet buttonType="primary" className={styles.navigationWrapper}>
                            <Item className={"navigration-item"}>
                                {item.titleNavigation}
                            </Item>
                            <IconComponent />
                        </ButtonSet>
                    </Link>
                )
            }}
        />
    );
};

export default NavigationBar;
