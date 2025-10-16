import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

export interface IExelRow {
    [key: string]: string | number | boolean | null
}

interface IExelState { 
    data: IExelRow[]
    headers: string[]
    fileName: string
    isLoad: boolean
    error: string | null
} 

interface IExelData {
    data: IExelRow[]
    headers: string[]
    fileName: string
}

const initialState: IExelState = {
    data: [],
    headers: [],
    fileName: '',
    isLoad: false,
    error: null
}

const exelSlice = createSlice( {
    name: 'exel',
    initialState,
    reducers: {

        setExelData: (state, actions: PayloadAction<IExelData>) => {
            state.data = actions.payload.data,
            state.headers = actions.payload.headers,
            state.fileName = actions.payload.fileName,
            state.isLoad = false
    },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload,
            state.isLoad = false
    },
        clearData: (state) => {
            state.data = [],
            state.headers = [],
            state.fileName = ''
    }   
    }
    })

export default exelSlice.reducer
export const { setExelData, setError, clearData} = exelSlice.actions


