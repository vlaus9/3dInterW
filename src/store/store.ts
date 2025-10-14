import { configureStore } from "@reduxjs/toolkit";
import textSlice from './slices/inputSlice'

export const store = configureStore({
    reducer: {
        textSlice,
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch