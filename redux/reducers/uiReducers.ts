import { menu_list } from './../../components/Megamenu/VerticalMenu';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UIState {
    open: boolean
}


const initialState: UIState = {
    open: false
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        show: (state) => {
            state.open = true
        },
        hide: (state) => {
            state.open = false
        },

    },
})

// Action creators are generated for each case reducer function
export const { show, hide } = counterSlice.actions

export default counterSlice.reducer