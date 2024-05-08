import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { User } from '../models/user';
import { usersMock } from '../models/users.mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public getUsers(): Observable<User[]> {
    return of(usersMock).pipe(delay(300));
  }

  public createUser(user: User): Observable<User> {
    return of(user).pipe(delay(300));
  }

  public deleteUser(id: string): Observable<null> {
    return of(null).pipe(delay(300));
  }
}
