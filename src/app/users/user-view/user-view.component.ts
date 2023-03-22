import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { User } from '../models/user';
import { selectUsers } from '../+state/users.selectors';
import { UserState } from '../+state/users.reducer';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html'
})
export class UserViewComponent  {

  users$: Observable<User[]>;

  constructor(private store: Store<UserState>) {
    this.users$ = this.store.pipe(select(selectUsers))
  }

  showCurrentUsers() {
    this.users$ = this.store.pipe(select(selectUsers));
  }

}
