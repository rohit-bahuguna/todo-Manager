import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        setAllTasks: (state, action) => {
            state.tasks = [...action.payload]
        },
        updateTasks: (state, action) => {
            state.tasks = [...state.tasks, action.payload]
        }
    }
})

export const { setAllTasks, updateTasks, updateAfterDeleting } = todoSlice.actions;
export default todoSlice.reducer