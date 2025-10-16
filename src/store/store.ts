import { configureStore } from "@reduxjs/toolkit";
import textSlice from './slices/inputSlice'
import exelSlice from './slices/exelSlice'

export const store = configureStore({
    reducer: {
        text: textSlice,
        exel: exelSlice
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch