import { createSlice } from '@reduxjs/toolkit';
const initialState = {
	data: {
		totalTasks: 0,
		loginStatus: false,
		verified: false
	}
};

export const userSlice = createSlice({
	name: 'user',
	initialState,

	reducers: {
		login: (state, action) => {
			const { payload } = action;

			state.data = { ...payload, loginStatus: true, totalTasks: 0 };
		},
		logout: state => {
			state.data = {
				totalTasks: 0,
				loginStatus: false,
				verified: false
			};
		},
		setTotalTask: (state, action) => {
			state.data = { ...state.data, totalTasks: action.payload };
		},
		setDataAfterRefresh: (state, action) => {
			const { payload: { name, email, loginStatus } } = action;
			state.data = { ...state, name, email, loginStatus };
		},
		setVerificationStatus: (state, action) => {
			state.data = { ...state.data, verified: action.payload };
		}
	}
});

export const {
	login,
	logout,
	setTotalTask,
	setDataAfterRefresh,
	setVerificationStatus
} = userSlice.actions;

export default userSlice.reducer;
