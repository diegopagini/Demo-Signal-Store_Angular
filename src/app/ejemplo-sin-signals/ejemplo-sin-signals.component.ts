import { AsyncPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatProgressBar } from '@angular/material/progress-bar';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from '@angular/material/table';
import { Store } from '@ngrx/store';
import { BehaviorSubject, combineLatest, debounceTime, map, Observable, tap } from 'rxjs';
import { UserCreationWithSignalsComponent } from '../ejemplo-con-signals/user-creation/user-creation.component';
import { User } from '../shared/models/user';
import { userActions } from './store/user.actions';
import { userSelectors } from './store/users.selectors';

@Component({
  selector: 'app-ejemplo-sin-signals',
  standalone: true,
  templateUrl: './ejemplo-sin-signals.component.html',
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatFormField,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatInput,
    MatLabel,
    MatMiniFabButton,
    MatRow,
    MatRowDef,
    MatTable,
    UserCreationWithSignalsComponent,
    AsyncPipe,
    MatHeaderCellDef,
    MatProgressBar
  ],
  styleUrl: './ejemplo-sin-signals.component.scss'
})
export class EjemploSinSignalsComponent implements OnInit {
  public columnsToDisplay = ['name', 'email', 'lastName', 'actions'];
  public users$: Observable<User[]> = new Observable<User[]>();
  public loading$: Observable<boolean> = this.selectLoading();
  public filter$ = new BehaviorSubject('');
  public firstUser$ = this.selectFirstFilteredUser();

  constructor(
    private store: Store,
    private dialog: MatDialog
  ) {
    // Si necesitaras saber si el usuario ha cambiado y el loading ha cambiado a la vez
    combineLatest([this.selectUsers(), this.selectLoading()]).subscribe(([users, loading]) => {
      console.log('El usuario y el login ha cambiado', users, loading);
    });
  }

  ngOnInit() {
    this.store.dispatch(userActions.getUsers());
    this.users$ = this.selectFilteredUsers();
  }

  public onFilterInputChange({ target }: Event): void {
    this.filter$.next((target as HTMLInputElement)?.value);
  }

  public deleteUser({ id }: User) {
    this.store.dispatch(userActions.deleteUser({ id }));
  }

  public selectFilteredUsers() {
    return combineLatest([this.selectUsers(), this.filter$]).pipe(
      debounceTime(300),
      map(([users, filter]) => this.filterUsersByName(users, filter))
    );
  }

  public selectFirstFilteredUser() {
    return this.selectFilteredUsers().pipe(
      tap(console.log),
      map(users => users[0]),
      map(user => (user ? `${user.name} ${user.lastName}` : ''))
    );
  }

  public selectUsers() {
    return this.store.select(userSelectors.selectUsers);
  }

  // MODAL DE CREACION ------------------------------
  public onAddUserClick() {
    const dialog = this.dialog.open(UserCreationWithSignalsComponent, {
      width: '400px',
      height: '500px'
    });

    dialog.afterClosed().subscribe((user: User) => {
      console.log(user);
      if (user) {
        this.store.dispatch(userActions.createUser({ user }));
      }
    });
  }

  private filterUsersByName(users: User[], input: string): User[] {
    return users.filter(user => user.name.toLowerCase().includes(input.toLowerCase()));
  }

  private selectLoading() {
    return this.store.select(userSelectors.selectUsersLoading);
  }
}
