import AsyncStorage from '@react-native-community/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import {uniqBy, uniqueId} from 'lodash';

import {addOrderAction} from './actions';
import {IOrder} from 'types/data';
import {OrderState} from './types';

const initialState: OrderState = {
  loading: false,
  order: [],
};

const orderSlice = createSlice({
  name: 'order',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      addOrderAction.type,
      (state, action: PayloadAction<IOrder>) => {
        const newOrderItem: IOrder = {...action.payload, id: uniqueId()};
        state.order = uniqBy([...state.order, newOrderItem], 'id');
      },
    );
  },
});

const persistConfig: PersistConfig<OrderState> = {
  key: 'order',
  storage: AsyncStorage,
  whitelist: ['order'],
};

export const orderReducer = persistReducer(persistConfig, orderSlice.reducer);
