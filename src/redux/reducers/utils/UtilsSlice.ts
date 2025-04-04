import { UtilsState } from "@/types/app/state/util/utilState";
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

        modalOpen(state, action: PayloadAction<{
            title: string,
            content: string
        }>) {
            const {title, content} = action.payload;
            state.isModalClose = false;
            state.isModalOpen = true;
            state.modalTitle = title;
            state.modalContent = content;
        }
    }
})


export default UtilsSlice.reducer;
