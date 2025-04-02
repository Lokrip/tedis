import { FC, PropsWithChildren } from "react";
import Button from "../Button";
import styles from "./button.module.scss";
import { ClassNameType } from "../../../../../types/react.type";
import { correctClass } from "../../../../../utils/utils";

const SecondaryButton: FC<PropsWithChildren & ClassNameType> = ({children, className, ...props}) => {
    const classNameValid = correctClass(styles.button, className!)

    return (
        <Button className={classNameValid} {...props}>
            {children}
        </Button>
    )
}

export default SecondaryButton
