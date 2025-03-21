import { FC, PropsWithChildren } from "react";

import styles from '../detailStore.module.scss'
import { attachSubComponents, correctClass } from "@/utils/utils";
import { ClassNameType } from "@/types/react.type";


const BreadcrumbsComponets: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass("", className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}

const ProductGridComponets: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass(styles.productGridContainer, className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}


const MainDetailStoreComponets: FC<PropsWithChildren & ClassNameType> = ({children, className}) => {
    const classNameValid = correctClass(styles.detailStore, className!)

    return (
        <div className={classNameValid} id="body-layout-detail-store">
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
