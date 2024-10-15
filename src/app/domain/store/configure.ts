import { configureStore, Middleware } from '@reduxjs/toolkit';
import { createLogger } from 'redux-logger';
import { FLUSH, PAUSE, PERSIST, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { createReducers } from './createReducers';

const middlewares: Middleware[] = [];

if (process.env.NODE_ENV !== 'production') {
	const logger = createLogger({});
	middlewares.push(logger);
}

const combinedReducers = createReducers();

const store = configureStore({
	reducer: combinedReducers,
	middleware: getDefaultMiddleware => getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: [FLUSH, PAUSE, PERSIST, PURGE, REGISTER, REHYDRATE],
		},
	}).concat(middlewares),
	devTools: process.env.NODE_ENV !== 'production',
});

export { store };
export const persistor = persistStore(store);
export type AppStore = typeof store;
export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
