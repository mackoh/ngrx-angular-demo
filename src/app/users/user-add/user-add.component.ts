import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../models/user';
import { addUser } from '../+state/users.actions';
import { UserState } from '../+state/users.reducer';

import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html'
})
export class UserAddComponent {

  form = new FormGroup({
    userName: new FormControl('userName')
  });


  constructor(private store: Store<UserState>) { }

  addUser(input: any): void {
    const user = new User();
    user.name = input.value;
    input.value = '';
    input.focus();

    this.store.dispatch(addUser(user));
  }

}
