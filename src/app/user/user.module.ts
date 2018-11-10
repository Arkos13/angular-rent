import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserComponent} from './user.component';
import {UserService} from './shared/user.service';
import {AuthService} from '../auth/shared/auth.service';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import {AuthGuard} from '../auth/shared/auth.guard';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {
    path: 'users',
    component: UserComponent,
    children: [
      { path: 'profile', canActivate: [AuthGuard], component: UserDetailComponent}
    ]
  }
];

@NgModule({
  declarations: [
    UserComponent,
    UserDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    AuthService
  ]
})
export class UserModule { }
