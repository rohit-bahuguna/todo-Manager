import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: []
};

export const todoSlice = createSlice({
	name: 'todo',
	initialState,
	reducers: {
		setAllTasks: (state, action) => {
			state.data = [...action.payload];
		},
		updateTasks: (state, action) => {
			console.log(action.payload);
			state.data = [action.payload, ...state.data];
		}
	}
});

export const {
	setAllTasks,
	updateTasks,
	updateAfterDeleting
} = todoSlice.actions;
export default todoSlice.reducer;
