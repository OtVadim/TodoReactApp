import { configureStore } from '@reduxjs/toolkit'
import counterReduser from '../features/Counter/counterSlice'
import todoReducer from '../features/todo/todoSlice'

export const store = configureStore({
    reducer: {
        counter: counterReduser,
        todo: todoReducer,
    },
  })