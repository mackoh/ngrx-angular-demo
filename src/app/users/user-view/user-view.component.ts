import { Component } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { User } from '../models/user';
import { selectUsers } from '../+state/users.selectors';
import { UserState } from '../+state/users.reducer';
import * as UserActions from '../+state/users.actions';


@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styles: [
    `
      .remove {
        margin-left: 5px;
        color: red;
        font-weight: bold;
        cursor: pointer;
      }
    `
  ]
})
export class UserViewComponent  {

  users$: Observable<User[]>;

  private readonly destroyed$ = new Subject();

  constructor(private store: Store<UserState>) {
    this.users$ = this.store.pipe(select(selectUsers))
  }

  showCurrentUsers() {
    this.users$ = this.store.pipe(select(selectUsers));
  }

  removeUser(name: string): void {
    this.store.dispatch(UserActions.removeUser({ name: name }));
  }

}
