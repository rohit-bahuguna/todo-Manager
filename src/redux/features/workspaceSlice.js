import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	workspaces: [],
	currentWorkspace: ''
};

export const workspaceSlice = createSlice({
	name: 'workspace',
	initialState,

	reducers: {
		setWorkspaces: (state, action) => {
			state.workspaces = [...action.payload];
		},
		setCurrentWorkspace: (state, action) => {
			state.currentWorkspace = action.payload;
		}
	}
});

export const { setWorkspaces, setCurrentWorkspace } = workspaceSlice.actions;

export default workspaceSlice.reducer;
