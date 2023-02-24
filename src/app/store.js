import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';
import taskReducer from '../redux/todoSclice';
import assignedTaskReducer from '../redux/assignedTaskSlice';
export const store = configureStore({
	reducer: { userReducer, taskReducer, assignedTaskReducer }
});
