import { AsyncPipe } from '@angular/common';
import { Component, computed, effect, inject, signal, ViewChild } from '@angular/core';
import { MatButton, MatIconButton, MatMiniFabButton } from '@angular/material/button';
import { MatCardTitle } from '@angular/material/card';
import { MatDialog } from '@angular/material/dialog';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatProgressBar } from '@angular/material/progress-bar';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
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
import { User } from '../shared/models/user';
import { UsersStore } from './store/users.store';
import { UserCreationWithSignalsComponent } from './user-creation/user-creation.component';

@Component({
  selector: 'app-ejemplo-con-signals',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCell,
    MatCell,
    MatColumnDef,
    MatHeaderRow,
    MatRow,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRowDef,
    MatRowDef,
    MatFormField,
    MatInput,
    MatLabel,
    MatCardTitle,
    MatProgressSpinner,
    MatPaginator,
    MatButton,
    MatIconButton,
    MatIcon,
    MatMiniFabButton,
    UserCreationWithSignalsComponent,
    AsyncPipe,
    MatProgressBar
  ],
  providers: [UsersStore],
  templateUrl: './ejemplo-con-signals.component.html',
  styleUrl: './ejemplo-con-signals.component.scss'
})
export class EjemploConSignalsComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  public userStore = inject(UsersStore);
  public dialog = inject(MatDialog);

  public columnsToDisplay = ['name', 'email', 'lastName', 'actions'];

  public filter = signal('');
  public filteredUsers = computed(() => this.filterUsersByName(this.userStore.users(), this.filter()));
  public firstUserFullName = computed(() => {
    const [firstUser] = this.filteredUsers();
    return firstUser ? `${firstUser.name} ${firstUser.lastName}` : '';
  });

  constructor() {
    // Si necesitaras saber si el usuario ha cambiado y el loading ha cambiado a la vez
    effect(() => {
      console.log('First user full name has changed: ', this.firstUserFullName(), this.userStore.loading());
    });
  }

  public onInput(event: Event): void {
    if (event.target instanceof HTMLInputElement) {
      this.filter.set(event.target.value);
    }
  }

  public deleteUser({ id }: User): void {
    this.userStore.deleteUser(id);
  }

  // --- --------------------------- MODAL CREACION
  public onUserCreationClick(): void {
    const dialog = this.dialog.open(UserCreationWithSignalsComponent, {
      width: '400px',
      height: '500px'
    });

    dialog.afterClosed().subscribe((user: User) => {
      if (user) {
        this.userStore.createUser(user);
      }
    });
  }

  private filterUsersByName(users: User[], input: string): User[] {
    return users.filter(user => user.name.toLowerCase().includes(input.toLowerCase()));
  }
}
