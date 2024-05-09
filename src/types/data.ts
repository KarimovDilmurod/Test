export interface IProductData {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IProduct {
  id: number;
  title: string;
  product_type: string;
  price: string;
  image: string | null;
  count?: number;
}

export interface ICart {
  product: IProduct[];
  count: number;
}

export interface IUser {
  lastName: string;
  firstName: string;
  email: string;
}

export interface IOrder {
  lastName: string;
  firstName: string;
  items: IProduct[];
  id?: string;
}
