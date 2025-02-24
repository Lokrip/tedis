import { INavigations } from "../../models/INavigations.type";


type NavigationTypeList = "basket" | "contacts" | "sign-in"
type ActionNavigationDeleteType = string

interface NavigationState {
    navigations: INavigations[]
}
