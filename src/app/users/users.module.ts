import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { usersFeatureKey, reducer } from './+state/users.reducer';

import { UserAddComponent } from './user-add/user-add.component';
import { UserViewComponent } from './user-view/user-view.component';


@NgModule({
  declarations: [
    UserViewComponent,
    UserAddComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(usersFeatureKey, reducer)
  ],
  exports: [
    UserViewComponent,
    UserAddComponent
  ]
})
export class UsersModule { }
