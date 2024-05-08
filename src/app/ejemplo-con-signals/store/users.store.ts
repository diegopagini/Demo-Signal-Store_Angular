import { computed, inject, InjectionToken } from '@angular/core';
import { tapResponse } from '@ngrx/operators';
import { patchState, signalStore, withComputed, withHooks, withMethods, withState } from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { debounceTime, pipe, switchMap, tap } from 'rxjs';
import { User } from '../../shared/models/user';
import { UserService } from '../../shared/services/user.service';

type UsersState = {
  users: User[];
  filteredUsers: User[];
  loading: boolean;
  error: Error | null;
};

const initialState: UsersState = {
  users: [],
  filteredUsers: [],
  error: null,
  loading: false
};

const USERS_STATE = new InjectionToken<UsersState>('BooksState', {
  factory: () => initialState
});

export const UsersStore = signalStore(
  withState(initialState),
  withComputed(state => ({
    usersCount: computed(() => state.users().length)
  })),
  withMethods((state, usersService = inject(UserService)) => ({
    filterByName: rxMethod<string>(
      pipe(
        debounceTime(300),
        tap(name =>
          patchState(state, {
            filteredUsers: state.users().filter(user => user.name.toLowerCase().includes(name.toLowerCase()))
          })
        )
      )
    ),
    createUser: rxMethod<User>(
      pipe(
        switchMap(user =>
          usersService.createUser(user).pipe(
            tapResponse({
              next: user => patchState(state, { users: [...state.users(), user] }),
              error: err => console.error(err)
            })
          )
        )
      )
    ),
    deleteUser: rxMethod<string>(
      pipe(
        switchMap(id =>
          usersService.deleteUser(id).pipe(
            tapResponse({
              next: () => {
                console.log('User deleted');
                patchState(state, { users: state.users().filter(user => user.id !== id) });
              },
              error: err => console.error(err)
            })
          )
        )
      )
    ),
    getUsers: rxMethod<void>(
      pipe(
        tap(() => patchState(state, { loading: true })),
        switchMap(() =>
          usersService.getUsers().pipe(
            tapResponse({
              next: users => patchState(state, { users, filteredUsers: users, loading: false }),
              error: err => console.error(err),
              complete: () => console.log('complete')
            })
          )
        )
      )
    )
  })),
  withHooks({
    onInit: store => store.getUsers()
  })
);
