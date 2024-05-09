import {RootState} from 'state';
import {products} from 'constans/productsJson';

export const getProductList = (state: RootState) => state.search;
export const getProductListWithSearch =
  (search: string) => (state: RootState) => ({
    ...products,
    searchResponse:
      (search
        ? products.filter(item =>
            item.title.toLowerCase().includes(search.toLowerCase()),
          )
        : state.search.searchResponse) || [],
  });
