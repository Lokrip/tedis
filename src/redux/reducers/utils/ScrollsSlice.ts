import { ScrollsPayloadActionState, ScrollsState } from "@/types/app/state/util/scrollsState";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: ScrollsState = {
    scrollSetPosition: null,
    scrollResetPosition: null
}

export const ScrollsSlice = createSlice({
    name: "scrolls",
    initialState,
    reducers: {
        savedScrollsPositionToInit(state, action: PayloadAction<ScrollsPayloadActionState>) {
            state.scrollSetPosition = action.payload.scrollPosition;
        },
        savedScrollsPositionToResult(state, action: PayloadAction<ScrollsPayloadActionState>) {
            state.scrollResetPosition = action.payload.scrollPosition;
        },

        resetScrollsPosition(state) {
            state.scrollSetPosition = null;
            state.scrollResetPosition = null;
        }
    }
})

export default ScrollsSlice.reducer;
