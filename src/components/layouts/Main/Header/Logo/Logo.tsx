"use client"
import { FC } from "react"
import { ClassNameType } from "../../../../../types/react.type"
import { correctClass } from "../../../../../utils"
import ImageR from "../../../../ui/assets/image/Image"

import styles from './logo.module.scss'


export const Logo: FC<ClassNameType> = ({className}) => {

    const newClassName = correctClass(styles.primaryLogo, className!)

    return (
        <div className={newClassName}>
            <div className="icon-container icon-logo-container">
                <ImageR 
                    src={'/image/logo.png'}
                    alt="logo"
                    width={50}
                    height={50}
                    // onLoadingComplete={onImageLoaded}
                />
            </div>
        </div>
    )
}