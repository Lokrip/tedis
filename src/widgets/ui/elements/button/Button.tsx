import { ButtonTypeInterface } from "./button.type";

export default function Button<P extends ButtonTypeInterface>({children, ...props}: P) {
    return (
        <button {...props}>{children}</button>
    )
}