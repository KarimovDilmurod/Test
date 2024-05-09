import {createAction} from '@reduxjs/toolkit';
import {IProduct} from 'types/data';

export const addCartAction = createAction<IProduct>('cart/add');
export const clearAllCartAction = createAction('cart/clearAll');
export const clearCartAction = createAction<IProduct>('cart/clear');
