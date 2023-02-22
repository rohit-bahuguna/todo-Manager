import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: {
        name: '',
        email: '',
        totalTasks: '',
        loginStatus: false,
        verified: false
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        login: (state, action) => {
            const { payload: { name, email, verified } } = action

            console.log();
            state.user = { ...state, name, email, verified, loginStatus: true }
        },
        logout: (state) => {
            state.user = { ...initialState }
        },
        setTotalTask: (state, action) => {
            state.user.totalTasks = action.payload
        },
        setDataAfterRefresh: (state, action) => {
            const { payload: { name, email, loginStatus } } = action
            state.user = { ...state, name, email, loginStatus }
        },
        setVerificationStatus: (state, action) => {
            state.user.verified = action.payload
        }
    }
}
)

export const { login, logout, setTotalTask, setDataAfterRefresh, setVerificationStatus } = userSlice.actions

export default userSlice.reducer