import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface Tinitialtext {
    initialText: string
    isClear: boolean
    textShow: string
    cashText: string
}

const initialState: Tinitialtext = {
    initialText: 'Сейчас введено то что введено',
    isClear: true, 
    textShow: '',
    cashText: ''
}

const textSlice = createSlice({
    name: 'textContent',
    initialState,
    reducers: {
        cashTextContent: (state, action: PayloadAction<string>) => {
            state.cashText = action.payload
            state.isClear = false
        },
        changeText: (state) => {
            state.textShow = state.cashText
        },
        clearInput: (state => {
            state.isClear = true
        })
    }
})

export default textSlice.reducer
export const { cashTextContent, changeText, clearInput } = textSlice.actions