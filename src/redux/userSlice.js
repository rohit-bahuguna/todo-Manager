import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    user: {
        name: '',
        email: '',
        totalTasks: '',
        loginStatus: false
    }
}

export const userSlice = createSlice({
    name: 'user',
    initialState,

    reducers: {
        login: (state, action) => {
            const { payload: { name, email } } = action

            console.log(action);
            state.user = { ...state, name, email, loginStatus: true }
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
        }
    }
}
)

export const { login, logout, setTotalTask, setDataAfterRefresh } = userSlice.actions

export default userSlice.reducer