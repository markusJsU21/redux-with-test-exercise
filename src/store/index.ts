import todoReducer from './todoSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
    reducer: {
        todo: todoReducer
    }

})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export default store