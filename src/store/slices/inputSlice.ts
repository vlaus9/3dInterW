import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

interface textShow {
    id: string
    content: string
}

interface Tinitialtext {
    initialText: string
    isClear: boolean
    textShow: textShow[]
    cashText: string
}

const initialState: Tinitialtext = {
    initialText: 'Сейчас введено то что введено',
    isClear: true, 
    textShow: [],
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
            state.textShow.push({
                id: Date.now().toString(),
                content: state.cashText
            }) 
            state.isClear = true
        },
        clearInput: (state => {
            state.isClear = true
        }),
        delElem: (state, action: PayloadAction<string>) => { 
           state.textShow = state.textShow.filter((item) => item.id !== action.payload)
        }
    }
})

export default textSlice.reducer
export const { cashTextContent, changeText, clearInput, delElem } = textSlice.actions