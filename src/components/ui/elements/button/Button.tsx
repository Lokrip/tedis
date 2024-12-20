import { PropsWithChildren } from "react";
import { ButtonTypeInterface } from "./button.type";

interface ButtonSetProps extends ButtonTypeInterface {}

export default function Button<P extends ButtonSetProps>({children, ...props}: P) {
    return (
        <button {...props}>{children}</button>
    )
}