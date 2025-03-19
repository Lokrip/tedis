import {ButtonHTMLAttributes, FC, PropsWithChildren} from "react"
import PrimaryButton from "./primary/Button"
import SecondaryButton from "./secondary/Button"
import { ButtonTypeInterface } from "./button.type"
import ButtonV4 from "./button-v4/ButtonV4"

type ButtonType = 'primary' | 'secondary' | 'btnV4'

interface ButtonSetProps extends ButtonTypeInterface {
    buttonType: ButtonType
}

interface ButtonElementsType {
    primary: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>;
    secondary: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>;
    btnV4: FC<PropsWithChildren<ButtonHTMLAttributes<HTMLButtonElement>>>;
  }

const ButtonElements: ButtonElementsType = {
    primary: PrimaryButton,
    secondary: SecondaryButton,
    btnV4: ButtonV4,
}


export default function ButtonSet<P extends ButtonSetProps>({children, buttonType, className, ...props}: P) {
    const ButtonChoice = ButtonElements[buttonType!]; 

    return (
        <ButtonChoice className={className} {...props}>{children}</ButtonChoice>
    )
}