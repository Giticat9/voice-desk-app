import { createSlice } from '@reduxjs/toolkit';
import { StoreReducerNames } from '../enums';

export interface AppState {}

const initialState: AppState = {};

const slice = createSlice({
	name: StoreReducerNames.APP,
	initialState,
	reducers: {},
});

export default slice.reducer;