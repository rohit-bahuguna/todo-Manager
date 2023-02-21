import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/userSlice"
import taskReducer from '../redux/todoSclice'
export const store = configureStore({
    reducer: { userReducer, taskReducer }
})