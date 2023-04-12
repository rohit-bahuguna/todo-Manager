import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	data: []
};

const assignedtTaskSlice = createSlice({
	name: 'assignedTask',

	initialState,
	reducers: {
		setAssignedTask: (state, action) => {
			state.data = [...action.payload];
		}
	}
});

export const { setAssignedTask } = assignedtTaskSlice.actions;
export default assignedtTaskSlice.reducer;
