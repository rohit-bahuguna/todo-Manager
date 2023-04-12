import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/userSlice';
import taskReducer from '../features/todoSclice';
import assignedTaskReducer from '../features/assignedTaskSlice';
import workspaceReducer from '../features/workspaceSlice';
import projectReducer from '../features/projectSlice';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootPersistConfig = {
	key: 'root',
	storage,
	whiteList: ['user']
};

const rootReducer = combineReducers({
	taskReducer,
	user: persistReducer(rootPersistConfig, userReducer),
	assignedTaskReducer,
	workspaceReducer,
	projectReducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk]
});

export const persistor = persistStore(store);
