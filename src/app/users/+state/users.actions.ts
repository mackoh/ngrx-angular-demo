import { createAction } from '@ngrx/store';
import { User } from '../models/user';

export const addUser = createAction(
  '[User] Add User',
  (user: User) => ({user})
);

export const removeUser = createAction(
  '[User] Remove User',
  (user: User) => ({user})
);

