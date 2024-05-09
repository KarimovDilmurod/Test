import AsyncStorage from '@react-native-community/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import {createUserAction, clearUserAction} from './actions';
import {IUser} from 'types/data';
import {UserState} from './types';

const initialState: UserState = {
  loading: false,
  user: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      createUserAction.type,
      (state, action: PayloadAction<IUser>) => {
        state.user = action.payload;
      },
    );
    builder.addCase(clearUserAction.type, state => {
      state.user = null;
    });
  },
});

const persistConfig: PersistConfig<UserState> = {
  key: 'user',
  storage: AsyncStorage,
  whitelist: ['user'],
};

export const userReducer = persistReducer(persistConfig, userSlice.reducer);
