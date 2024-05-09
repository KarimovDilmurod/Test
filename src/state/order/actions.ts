import {createAction} from '@reduxjs/toolkit';
import {IOrder} from 'types/data';

export const addOrderAction = createAction<IOrder>('order/add');
