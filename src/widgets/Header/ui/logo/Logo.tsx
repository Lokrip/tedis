"use client"
import { FC } from "react"
import { ClassNameType } from "../../../../types/react.type"
import ImageR from "../../../ui/assets/image/Image"

import styles from './logo.module.scss'
import Link from "next/link"
import { usePathname } from "next/navigation"
import pages from "@/entities/route"
import { correctClass } from "@/utils/utils"


export const Logo: FC<ClassNameType> = ({className}) => {
    const pathname = usePathname();
    const newClassName = correctClass(styles.primaryLogo, className!)

    return (
        <div className={newClassName}>
            {pathname === pages.home ? (
                <div className="icon-container icon-logo-container">
                    <ImageR
                        src={'/image/logo.png'}
                        alt="logo"
                        width={50}
                        height={50}
                        // onLoadingComplete={onImageLoaded}
                    />
                </div>
            ) : (
                <Link href={pages.home} className="icon-container icon-logo-container">
                    <ImageR
                        src={'/image/logo.png'}
                        alt="logo"
                        width={50}
                        height={50}
                        // onLoadingComplete={onImageLoaded}
                    />
                </Link>
            )}
        </div>
    )
}
