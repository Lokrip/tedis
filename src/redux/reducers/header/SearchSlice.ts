import { SearchState } from "@/types/app/state/header/searchState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: SearchState = {
    search: "",
    isMenuOpen: false,
    isSearchReady: false
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
        },

        searchReady(state, action: PayloadAction<boolean>) {
            state.isSearchReady = action.payload;
        }
    }
})

export default SearchSlice.reducer;
