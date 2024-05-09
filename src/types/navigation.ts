import R from '../res';
import {IProduct} from './data';

export type TNavigationParams = {
  [R.routes.ROOT_MAIN]: {tab: string} | undefined;

  [R.routes.STACK_PRODUCT_LIST]: undefined;
  [R.routes.STACK_CART]: undefined;
  [R.routes.STACK_PROFILE]: undefined;

  [R.routes.SCREEN_PRODUCT_DETAIL]: {product: IProduct};
  [R.routes.SCREEN_PRODUCT_LIST]: undefined;
  [R.routes.SCREEN_CART]: undefined;
  [R.routes.SCREEN_PROFILE]: undefined;
  [R.routes.SCREEN_CREATE_PROFILE]: undefined;
  [R.routes.SCREEN_ORDER_PLACE]: {cart: IProduct[]};
  [R.routes.SCREEN_ORDER]: undefined;
  [R.routes.SCREEN_SEARCH]: undefined;
};
