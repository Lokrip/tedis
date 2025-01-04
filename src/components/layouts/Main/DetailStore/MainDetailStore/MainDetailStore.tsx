import { ClassNameType } from "@/types/react.type";
import { attachSubComponents, correctClass } from "@/utils/utils";
import { FC, PropsWithChildren } from "react";

import styles from '../detailStore.module.scss'
import clsx from "clsx";

const BreadcrumbsComponets: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass("", className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}   

const ProductGridComponets: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass("", className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}   


const MainDetailStoreComponets: FC<PropsWithChildren & ClassNameType> = ({children}) => {
    return (
        <div className={styles.detailStore} id="body-layout-detail-store">
            {children}
        </div>
    )
}

export const MainDetailStore = attachSubComponents(
    'MainDetailStore',
    MainDetailStoreComponets,
    {
        "Breadcrumbs": BreadcrumbsComponets,
        "ProductGrid": ProductGridComponets,
    }
)