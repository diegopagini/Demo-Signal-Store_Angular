import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { UserService } from '../../shared/services/user.service';
import { userActions } from './user.actions';

@Injectable()
export class UserEffects {
  private readonly actions$ = inject(Actions);
  private readonly userService = inject(UserService);

  public getUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.getUsers),
      switchMap(() =>
        this.userService.getUsers().pipe(
          map(users => userActions.getUsersSuccess({ users })),
          catchError(error => of(userActions.getUsersError({ error })))
        )
      )
    )
  );

  public createUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.createUser),
      switchMap(({ user }) =>
        this.userService.createUser(user).pipe(
          map(user => userActions.createUserSuccess({ user })),
          catchError(error => of(userActions.createUserError({ error })))
        )
      )
    )
  );

  public deleteUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(userActions.deleteUser),
      switchMap(({ id }) =>
        this.userService.deleteUser(id).pipe(
          map(() => userActions.deleteUserSuccess({ id })),
          catchError(error => of(userActions.deleteUserError({ error })))
        )
      )
    )
  );
}
