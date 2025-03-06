import { createSlice } from "@reduxjs/toolkit"

const initialState: MenuState = {
    openDropDownMenu: false,
}


export const MenuSlice = createSlice({
    name: "menu",
    initialState,
    reducers: {
        toggleMenu(state) {
            state.openDropDownMenu = !state.openDropDownMenu
        },
    }
})

export default MenuSlice.reducer;
