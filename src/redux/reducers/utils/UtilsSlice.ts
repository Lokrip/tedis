import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: UtilsState = {
    isModalClose: false,
    isModalOpen: false,
    isLoading: false,
    isError: false,
    error: null,
    modalTitle: null,
    modalContent: null,
    isResults: false,
    results: null
}


export const UtilsSlice = createSlice({
    name: 'util',
    initialState,
    reducers: {
        modalClose(state) {
            state.isModalOpen = false;
            state.isModalClose = true;
        },

        modalOpen(state, action: PayloadAction<{title: string, content: string}>) {
            state.isModalClose = false;
            state.isModalOpen = true;
            state.modalTitle = action.payload.title;
            state.modalContent = action.payload.content;
        }
    }
})


export default UtilsSlice.reducer;
