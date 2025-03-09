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
import { ArrowRight } from 'lucide-react';

interface AsideProps {
    isOpen: boolean;
    close: (action: boolean) => void;
}

const Aside: FC<AsideProps> = ({isOpen, close}) => {
    const {data: categories} = catalogParamApi.useFetchAllCategoryParamQuery(undefined);

    return (
        <aside className={clsx(
            styles.modelMenu,
            'fixed-full',
            'mixed-full-width',
            isOpen && styles.active
        )}>
            <ShadowBackground />

            {isOpen && (
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
                                <>
                                <Link href={""} className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                    <Item className={styles.menuItems}>
                                        <IconComponent />
                                        {item.title}
                                    </Item>
                                    <ArrowRight className={styles.rightIcon} />
                                </Link>
                                <Link href={""} className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                    <Item className={styles.menuItems}>
                                        <IconComponent />
                                        {item.title}
                                    </Item>
                                    <ArrowRight className={styles.rightIcon} />
                                </Link>
                                <Link href={""} className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                    <Item className={styles.menuItems}>
                                        <IconComponent />
                                        {item.title}
                                    </Item>
                                    <ArrowRight className={styles.rightIcon} />
                                </Link>
                                <Link href={""} className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                    <Item className={styles.menuItems}>
                                        <IconComponent />
                                        {item.title}
                                    </Item>
                                    <ArrowRight className={styles.rightIcon} />
                                </Link>
                                </>
                            )
                        }}
                    />
                    <div className={styles.detailCategory}>
                        <HeadingH
                            className={styles.headingDetailCategory}
                            level={4}
                            content={"Detail Category"}
                        />
                        <List
                            className={clsx("menu-list", styles.menuListHeader)}
                            items={categories}
                            mapItems={(item) => {
                                const IconComponent = getIconComponent(item.icon);
                                return (
                                    <>
                                    <Link href={""} className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                        <Item className={styles.menuItems}>
                                            <IconComponent />
                                            {item.title}
                                        </Item>
                                        <ArrowRight className={styles.rightIcon} />
                                    </Link>
                                    <Link href={""} className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                        <Item className={styles.menuItems}>
                                            <IconComponent />
                                            {item.title}
                                        </Item>
                                        <ArrowRight className={styles.rightIcon} />
                                    </Link>
                                    <Link href={""} className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                        <Item className={styles.menuItems}>
                                            <IconComponent />
                                            {item.title}
                                        </Item>
                                        <ArrowRight className={styles.rightIcon} />
                                    </Link>
                                    <Link href={""} className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                        <Item className={styles.menuItems}>
                                            <IconComponent />
                                            {item.title}
                                        </Item>
                                        <ArrowRight className={styles.rightIcon} />
                                    </Link>
                                    <Link href={""} className={clsx(styles.menuListCard, styles.menuListCardHeader)}>
                                        <Item className={styles.menuItems}>
                                            <IconComponent />
                                            {item.title}
                                        </Item>
                                        <ArrowRight className={styles.rightIcon} />
                                    </Link>
                                    </>
                                )
                            }}
                        />
                    </div>
                </div>
            )}
        </aside>
    );
};

export default Aside;
