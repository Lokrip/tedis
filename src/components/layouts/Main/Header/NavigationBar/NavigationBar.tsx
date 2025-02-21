"use client"
import {FC, useEffect, useState} from 'react';

import Link from "next/link";
import styles from './navigationBar.module.scss';
import { List } from '../../../../ui/list/List';
import { Item } from '../../../../ui/list/item/Item';
import { getIconComponent } from '../../../../../utils';
import { useSession } from "next-auth/react";
import clsx from 'clsx';
import ButtonSet from '@/components/ui/elements/button/ButtonSet';

const NavigationBar: FC = () => {
    const [navigations, setNavigation] = useState([
        {id: 1, navigation: "/cn/basket", type: "basket", titleNavigation: "Корзина", icon: "ShoppingCart"},
        {id: 2, navigation: "/cy/contacts", type: "contacts", titleNavigation: "Контакт", icon: "BookUser"},
        {id: 3, navigation: "/account/login", type: "sign-in", titleNavigation: "Войти", icon: "User"},
    ])

    const session = useSession()

    useEffect(() => {
        if(session.status == "authenticated") {
            setNavigation(prev => {
                const updatedNavigations = prev.filter(navigation => navigation.type !== "sign-in")
                return [...updatedNavigations]
            })
        }
    }, [session])

    return (
        <List
            className={clsx('navigration-list', "flex-center")}
            items={navigations}
            mapItems={(item) => {
                const IconComponent = getIconComponent(item.icon);
                return (
                    <Link href={item.navigation}>
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
