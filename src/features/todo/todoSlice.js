import { createSlice } from "@reduxjs/toolkit";
//import { PayloadAction } from "@reduxjs/toolkit";

const initialState = [{
  id: 0,
  title: 'купить хлеб',
  completed: false,
}]

  export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
      addItem: (state, action) => {
        const newItem = {
        id: state.lenght,
        title: action.payload,
        completed: false
    }
    return [...state, action.payload]},
      deleteItem: (state, action) => state.filter((item) => item.id !== action.payload.id),
      completeItem: (state, action) => 
        state.map((item) => {
            if (item.id === action.payload.id) {
                return {
                    ...item, completed: !item.completed,
                }
            }
            return item
        })
      },
    })

  export const { addItem, deleteItem, completeItem,incrementByAmount } = todoSlice.actions

export default todoSlice.reducer