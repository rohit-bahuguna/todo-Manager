import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	tasks: []
};
const assignedtTaskSlice = createSlice({
	name: 'assignedTask',

	initialState,
	reducers: {
		setAssignedTask: (state, action) => {
			state.tasks = [...action.payload];
		}
	}
});

export const { setAssignedTask } = assignedtTaskSlice.actions;
export default assignedtTaskSlice.reducer;
