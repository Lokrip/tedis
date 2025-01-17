import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
    search: string;
    isMenuOpen: boolean;
}

const initialState: SearchState = {
    search: "",
    isMenuOpen: false
}


export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        saveDataInSearch(state, action: PayloadAction<string>){
            state.search = action.payload
        },

        openSearchMenu(state) {
            state.isMenuOpen = true;
        },

        closeSearchMenu(state) {
            state.isMenuOpen = false;
        }
    }
})

export default SearchSlice.reducer;