import { FC, PropsWithChildren } from "react";
import Button from "../Button";
import { ClassNameType } from "../../../../../types/react.type";
import { correctClass } from "../../../../../utils";

import styles from "./button.module.scss"

const PrimaryButton: FC<PropsWithChildren & ClassNameType> = ({children, className, ...props}) => {
    const classNameValid = correctClass(styles.button, className!)

    return (
        <Button className={classNameValid} {...props}>
            {children}
        </Button>
    )
}

export default PrimaryButton