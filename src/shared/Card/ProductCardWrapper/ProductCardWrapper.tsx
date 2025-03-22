import { FC, PropsWithChildren } from "react";

import styles from "./productCardWrapper.module.scss"
import { attachSubComponents, correctClass } from "@/utils/utils";
import { ClassNameType } from "@/types/react.type";

const MainCardTopWrap: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass(styles.cardTopWrapContainer, className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}

const MainCardMiddleWrap: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass(styles.cardMiddleWrapContainer, className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}

const MainCardBottomWrap: FC<PropsWithChildren & ClassNameType> = ({className, children, ...props}) => {
    const classNameValid = correctClass(styles.cardBottomWrapContainer, className!)

    return (
        <div className={classNameValid} {...props}>
            {children}
        </div>
    )
}

const ProductCardWrapperComponets: FC<PropsWithChildren & ClassNameType> = ({children}) => {
    return (
        <div className="product-card-wrapper-container">
            {children}
        </div>
    )
}

export const ProductCardWrapper = attachSubComponents(
    'ProductCardWrapper',
    ProductCardWrapperComponets,
    {
        "CardTopWrap": MainCardTopWrap,
        "CardMiddleWrap": MainCardMiddleWrap,
        "CardBottomWrap": MainCardBottomWrap
    }
)
