import { ActionNavigationDeleteType, NavigationState } from "@/types/app/state/header/navigationNavbarState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState: NavigationState = {
    navigations: [
        {id: 1, navigation: "/cn/basket", type: "basket", titleNavigation: "Корзина", icon: "ShoppingCart"},
        {id: 2, navigation: "/cy/contacts", type: "contacts", titleNavigation: "Контакт", icon: "BookUser"},
        {id: 3, navigation: "/account/login", type: "sign-in", titleNavigation: "Войти", icon: "User"},
    ]
}

export const NavigationNavbarSlice = createSlice({
    name: "navigation navbar",
    initialState,
    reducers: {
        deleteNavigation(state, action: PayloadAction<ActionNavigationDeleteType>) {
            const navigationType = action.payload;
            if(!navigationType) {
                throw new Error("Specify the type of navigation")
            }
            state.navigations = state.navigations.filter(
                navigation => navigation.type != navigationType
            )
        }
    }
})

export default NavigationNavbarSlice.reducer