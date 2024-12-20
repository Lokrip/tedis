import IBanner from "@/types/app/models/banner/IBanner.type";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type nextSlidType = 'next'
type prevSlidType = 'prev'

interface BannerState {
    currentMove: nextSlidType | prevSlidType | null;
    isLoadingScroll: boolean
}

const initialState: BannerState = {
    currentMove: null,
    isLoadingScroll: false,
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
    }
})


export default BannerSlice.reducer;