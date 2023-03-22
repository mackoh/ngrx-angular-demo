import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './users.actions';
import { User } from '../models/user';

export const usersFeatureKey = 'user';


export interface UserState {
  users: User[];
}

export const initialState: UserState = {
  users:  [
    { name: 'Sam Harris' },
    { name: 'John Colton' }
  ]
};

export const userReducer = createReducer(
  initialState,

  on(UserActions.addUser,
    (state: UserState, {user}) =>
      ({...state,
        users: [...state.users, user]
      }))
);

export function reducer(state: UserState | undefined, action: Action): any {
  return userReducer(state, action);
}
