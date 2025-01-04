"use client"
import {FC, useEffect} from 'react';

import styles from './navigationBar.module.scss';

import { signOut, useSession } from "next-auth/react";
import { HeadingH } from "@/components/plagins/H.number";
import Link from "next/link";
import { List } from '@/components/ui/list/List';
import { Item } from '@/components/ui/list/item/Item';
import { getIconComponent } from '@/utils/utils';
import clsx from 'clsx';

const NavigationBar: FC = () => {
    const session = useSession();

    useEffect(() => {
        console.log(session)
    }, [session])

    return (
        <List 
            className={clsx('navigration-list', "flex-center")}
            items={[
                {id: 1, navigation: "/cn/basket", titleNavigation: "Корзина", icon: "ShoppingCart"},
                {id: 2, navigation: "/cy/contacts", titleNavigation: "Контакт", icon: "BookUser"},
                {id: 3, navigation: "/account/login", titleNavigation: "Войти", icon: "User"},
            ]}
            mapItems={(item) => {
                const IconComponent = getIconComponent(item.icon); 
                return (
                    <Link href={item.navigation} className={clsx('navigration-wrapper')}>
                        <Item className={"navigration-item"}>
                            {item.titleNavigation}
                        </Item>
                        <IconComponent />
                    </Link>
                )
            }}
        />
    );
};

export default NavigationBar;