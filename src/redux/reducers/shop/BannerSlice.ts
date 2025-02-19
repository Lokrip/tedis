import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type nextSlidType = 'next'
type prevSlidType = 'prev'

interface BannerState {
    currentMove: nextSlidType | prevSlidType | null;
    isLoadingScroll: boolean;
    isError: boolean;
    error: string | null;
}

const initialState: BannerState = {
    currentMove: null,
    isLoadingScroll: false,
    isError: false,
    error: null
}


export const BannerSlice = createSlice({
    name: 'banner',
    initialState,
    reducers: {
        setNull(state){
            state.currentMove = null
        },

        stopStartScrolling(state, action: PayloadAction<boolean>) {
            state.isLoadingScroll = action.payload;
        },

        nextSlide(state, action: PayloadAction<nextSlidType>) {
            state.currentMove = action.payload;
        },

        prevSlide(state, action: PayloadAction<prevSlidType>) {
            state.currentMove = action.payload;
        },

        setError(state, action: PayloadAction<string>) {
            const error = action.payload

            state.isError = true;
            if(error) {
                state.error = error;
            }
        }
    }
})


export default BannerSlice.reducer;
