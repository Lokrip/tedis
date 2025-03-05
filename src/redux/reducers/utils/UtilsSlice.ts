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
            state.modalTitle = null;
            state.modalContent = null;
            state.isModalOpen = false;
            state.isModalClose = true;
        },

        modalOpen(state, action: PayloadAction<{title: string, content: string}>) {
            state.isModalClose = false;
            state.isModalOpen = true;
            state.modalTitle = action.payload.title;
            state.modalContent = action.payload.content;
        },

        modalReset(state) {
            state.isModalClose = false,
            state.isModalOpen = false,
            state.isLoading = false,
            state.isError = false,
            state.error = null,
            state.modalTitle = null,
            state.modalContent = null,
            state.isResults = false,
            state.results = null
        }
    }
})


export default UtilsSlice.reducer;
