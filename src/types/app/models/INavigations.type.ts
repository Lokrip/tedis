import { IModelPrimary } from "./IModelPrimary.type"

export interface INavigations extends IModelPrimary {
    navigation: string
    type: string
    titleNavigation: string
    icon: string
}
