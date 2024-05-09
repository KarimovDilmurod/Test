import {IProduct} from 'types/data';

export type CartState = {
  cart: IProduct[];
  loading: boolean;
};
