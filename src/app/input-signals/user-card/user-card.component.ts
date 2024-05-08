import { Component, input } from '@angular/core';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-user-card',
  standalone: true,
  imports: [],
  templateUrl: './user-card.component.html',
  styleUrl: './user-card.component.scss'
})
export class UserCardComponent {
  public userToShow = input.required<User>();
  public userUniqueName = input<string>('', { alias: 'uniqueName' });
}
