import { ClassNameType } from "@/types/react.type";
import { attachSubComponents, correctClass } from "@/utils/utils";
import { FC, PropsWithChildren } from "react";

import styles from '../store.module.scss'
import clsx from "clsx";

const MainBannerComponets: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass(clsx(styles.mainPageBanner, 'banner'), className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}   

const MainContentWrapperComponets: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass('main-page-content-wrapper', className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}

const MainStoreComponets: FC<PropsWithChildren & ClassNameType> = ({children}) => {
    return (
        <div className={styles.mainStore} id="body-layout-store">
            {children}
        </div>
    )
}

export const MainStore = attachSubComponents(
    'MainStore',
    MainStoreComponets,
    {
        "Banner": MainBannerComponets,
        "ContentWrapper": MainContentWrapperComponets,
    }
)