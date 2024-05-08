import { createEntityAdapter } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { User } from '../../shared/models/user';
import { userActions } from './user.actions';
import { userInitialState } from './user.state';

export const usersEntityAdapter = createEntityAdapter<User>();

export const userReducers = createReducer(
  userInitialState,
  on(userActions.getUsers, state => ({ ...state, loading: true })),
  on(userActions.getUsersSuccess, (state, { users }) => ({
    ...usersEntityAdapter.setAll(users, { ...state, loading: false, error: null })
  })),
  on(userActions.getUsersError, (state, { error }) => ({ ...state, loading: false, error })),
  on(userActions.createUser, state => ({ ...state, loading: true })),
  on(userActions.createUserSuccess, (state, { user }) => ({
    ...usersEntityAdapter.addOne(user, { ...state, loading: false, error: null })
  })),
  on(userActions.createUserError, (state, { error }) => ({ ...state, loading: false, error })),
  on(userActions.deleteUser, state => ({ ...state, loading: true })),
  on(userActions.deleteUserSuccess, (state, { id }) => ({
    ...usersEntityAdapter.removeOne(id, { ...state, loading: false, error: null })
  })),
  on(userActions.deleteUserError, (state, { error }) => ({ ...state, loading: false, error }))
);
