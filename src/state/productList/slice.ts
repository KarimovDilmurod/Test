import AsyncStorage from '@react-native-community/async-storage';
import {createSlice} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import {SearchResponseState} from './types';

const initialState: SearchResponseState = {
  searchResponse: null,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {},
});

const persistConfig: PersistConfig<SearchResponseState> = {
  key: 'search',
  storage: AsyncStorage,
  whitelist: [''],
  version: 1,
};

export const searchReducer = persistReducer(persistConfig, searchSlice.reducer);
