import { Component, computed, signal } from '@angular/core';
import { User } from '../shared/models/user';
import { usersMock } from '../shared/models/users.mock';
import { UserCardComponent } from './user-card/user-card.component';

@Component({
  selector: 'app-input-signals',
  standalone: true,
  imports: [UserCardComponent],
  templateUrl: './input-signals.component.html',
  styleUrl: './input-signals.component.scss'
})
export class InputSignalsComponent {
  public user = signal<User>(usersMock[0]);
  public userUniqueName = computed(() => this.user().name + ' ' + this.user().lastName);
}
