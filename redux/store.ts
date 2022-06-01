import { configureStore } from '@reduxjs/toolkit'
import uiReducers from './reducers/uiReducers'

export const store = configureStore({
    reducer: {
        uiReducer: uiReducers
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch