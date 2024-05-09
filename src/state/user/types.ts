import {IUser} from 'types/data';

export type UserState = {
  user: IUser | null;
  loading: boolean;
};
