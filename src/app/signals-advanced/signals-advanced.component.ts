import { Component, effect, signal, untracked } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { User } from '../shared/models/user';
import { usersMock } from '../shared/models/users.mock';

@Component({
  selector: 'app-signals-advanced',
  standalone: true,
  imports: [MatButton],
  templateUrl: './signals-advanced.component.html',
  styleUrl: './signals-advanced.component.scss'
})
export class SignalsAdvancedComponent {
  public selectedUser = signal(usersMock[1], { equal: this.isUserEqual });
  public counter = signal(0);

  constructor() {
    effect(onCleanup => {
      console.log('User changed in effect', this.selectedUser());
      // console.log(`Counter changed in effect ${untracked(this.counter)}`);

      // Se le puede añadir untracked que basicamente lo que hace es que aunque cambie ese valor no se vuelva a ejecutar el effect
      // untracked(() => {
      //   console.log(`Counter changed in effect ${this.counter()}`);
      // });
      untracked(() => {
        console.log(`Counter changed in effect ${this.counter()}`);
      });

      const timer = setTimeout(() => {
        console.log(`1 second ago, the counter became ${this.counter()}`);
      }, 1000);

      onCleanup(() => {
        clearTimeout(timer);
      });
    });
  }

  public changeUserName() {
    this.selectedUser.set(usersMock[0]);
  }

  public increaseCounter() {
    this.counter.update(counter => counter + 1);
  }

  private isUserEqual(user1: User, user2: User): boolean {
    return user1.id === user2.id;
  }
}
