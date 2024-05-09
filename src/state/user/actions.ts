import {createAction} from '@reduxjs/toolkit';
import {IUser} from 'types/data';

export const createUserAction = createAction<IUser>('user/create');
export const clearUserAction = createAction('user/clear');
