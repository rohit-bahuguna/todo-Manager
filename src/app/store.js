import { combineReducers, configureStore } from '@reduxjs/toolkit';
import userReducer from '../redux/userSlice';
import taskReducer from '../redux/todoSclice';
import assignedTaskReducer from '../redux/assignedTaskSlice';
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
	assignedTaskReducer
});

export const store = configureStore({
	reducer: rootReducer,
	middleware: [thunk]
});

export const persistor = persistStore(store);
