import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { StoreReducerNames } from '../enums';
import { appReducer } from '../slices';

export const createReducers = (asyncReducers = {}) => combineReducers({
	[StoreReducerNames.APP]: persistReducer({
		key: StoreReducerNames.APP,
		storage,
		version: 1,
		debug: true,
	}, appReducer),
	...asyncReducers,
});