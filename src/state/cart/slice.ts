import AsyncStorage from '@react-native-community/async-storage';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {PersistConfig, persistReducer} from 'redux-persist';
import {addCartAction, clearAllCartAction, clearCartAction} from './actions';
import {IProduct} from 'types/data';
import {CartState} from './types';

const initialState: CartState = {
  loading: false,
  cart: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      addCartAction.type,
      (state, action: PayloadAction<IProduct>) => {
        const existingproduct = state.cart.findIndex(
          product => product.id === action.payload.id,
        );
        if (existingproduct !== -1) {
          state.cart[existingproduct].count =
            (state.cart[existingproduct].count || 0) + 1;
        } else {
          state.cart.push({...action.payload, count: 1});
        }
      },
    );
    builder.addCase(clearAllCartAction.type, state => {
      state.cart = [];
    });
    builder.addCase(
      clearCartAction.type,
      (state, action: PayloadAction<IProduct>) => {
        const deleteProduct = state.cart.filter(
          i => i.id !== action.payload.id,
        );
        state.cart = deleteProduct;
      },
    );
  },
});

const persistConfig: PersistConfig<CartState> = {
  key: 'cart',
  storage: AsyncStorage,
  whitelist: ['cart'],
};

export const cartReducer = persistReducer(persistConfig, cartSlice.reducer);
