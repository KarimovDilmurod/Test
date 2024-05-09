import {IOrder} from 'types/data';

export type OrderState = {
  order: IOrder[];
  loading: boolean;
};
