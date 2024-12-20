import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface HeaderState {
    openMenu: boolean;
}


const initialState: HeaderState = {
    openMenu: false,
}

export const HeaderSlice = createSlice({
    name: 'header',
    initialState,
    reducers: {
        onOpenCloseMenu(state, action: PayloadAction<boolean>) {
            state.openMenu = action.payload
        }
    }
})


export default HeaderSlice.reducer