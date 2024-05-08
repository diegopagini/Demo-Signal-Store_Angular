import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersEntityAdapter } from './user.reducers';
import { userFeatureKey, UserState } from './user.state';

const userStateSelector = createFeatureSelector<UserState>(userFeatureKey);

const selectUsers = createSelector(userStateSelector, usersEntityAdapter.getSelectors().selectAll);

const selectUsersLoading = createSelector(userStateSelector, state => state.loading);

export const userSelectors = {
  selectUsers,
  selectUsersLoading
};
