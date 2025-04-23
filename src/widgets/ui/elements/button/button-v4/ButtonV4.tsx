import { FC, PropsWithChildren } from "react";
import Button from "../Button";

import styles from './button.module.scss'
import { correctClass } from "../../../../../utils/utils";
import { ClassNameType } from "../../../../../types/react.type";

const ButtonV4: FC<PropsWithChildren<ClassNameType>> = ({children, className, ...props}) => {
    const classNameValid = correctClass(styles.buttonVersion4, className!)

    return (
        <Button className={classNameValid} {...props}>
            {children}
        </Button>
    )
}

export default ButtonV4
