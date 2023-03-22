import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromUsers from './users.reducer';

export const selectUserState = createFeatureSelector<fromUsers.UserState>(
  fromUsers.usersFeatureKey,
);

export const selectUsers = createSelector(
  selectUserState,
  (state: fromUsers.UserState) => state.users
);

