import { FC } from "react";
import Button from "../Button";
import styles from "./button.module.scss";
import { correctClass } from "../../../../../utils/utils";
import { SecondaryButtonProps } from "./secondary-button.type";

const SecondaryButton: FC<SecondaryButtonProps> = ({children, className, ...props}) => {
    const classNameValid = correctClass(styles.button, className!)

    return (
        <Button className={classNameValid} {...props}>
            {children}
        </Button>
    )
}

export default SecondaryButton
