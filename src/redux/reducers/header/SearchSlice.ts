import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
    search: string;
}

const initialState: SearchState = {
    search: ""
}


export const SearchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        saveDataInSearch(state, action: PayloadAction<string>){
            state.search = action.payload
        }
    }
})

export default SearchSlice.reducer;