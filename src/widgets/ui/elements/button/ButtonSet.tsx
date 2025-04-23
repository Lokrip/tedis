import PrimaryButton from "./primary/Button"
import SecondaryButton from "./secondary/Button"
import ButtonV4 from "./button-v4/ButtonV4"
import { ButtonElementsType, ButtonSetProps } from "./button.type";


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
