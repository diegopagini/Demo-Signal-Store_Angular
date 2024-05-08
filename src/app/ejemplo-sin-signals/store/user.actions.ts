import { createAction, props } from '@ngrx/store';
import { User } from '../../shared/models/user';

enum userActionsTypes {
  GET_USERS = '[Users] Get Users',
  GET_USERS_SUCCESS = '[Users] Get Users Success',
  GET_USERS_ERROR = '[Users] Get Users Error',
  CREATE_USER = '[Users] Create User',
  CREATE_USER_SUCCESS = '[Users] Create User Success',
  CREATE_USER_ERROR = '[Users] Create User Error',
  DELETE_USER = '[Users] Delete User',
  DELETE_USER_SUCCESS = '[Users] Delete User Success',
  DELETE_USER_ERROR = '[Users] Delete User Error'
}

const getUsers = createAction(userActionsTypes.GET_USERS);
const getUsersSuccess = createAction(userActionsTypes.GET_USERS_SUCCESS, props<{ users: User[] }>());
const getUsersError = createAction(userActionsTypes.GET_USERS_ERROR, props<{ error: Error }>());

const createUser = createAction(userActionsTypes.CREATE_USER, props<{ user: User }>());

const createUserSuccess = createAction(userActionsTypes.CREATE_USER_SUCCESS, props<{ user: User }>());

const createUserError = createAction(userActionsTypes.CREATE_USER_ERROR, props<{ error: Error }>());

const deleteUser = createAction(userActionsTypes.DELETE_USER, props<{ id: string }>());

const deleteUserSuccess = createAction(userActionsTypes.DELETE_USER_SUCCESS, props<{ id: string }>());

const deleteUserError = createAction(userActionsTypes.DELETE_USER_ERROR, props<{ error: Error }>());

export const userActions = {
  getUsers,
  getUsersSuccess,
  getUsersError,
  createUser,
  createUserSuccess,
  createUserError,
  deleteUser,
  deleteUserSuccess,
  deleteUserError
};
