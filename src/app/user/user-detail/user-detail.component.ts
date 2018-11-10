import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../auth/shared/auth.service';
import {UserService} from '../shared/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: any;
  public userForm: FormGroup;
  public errors: any[] = [];
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private authService: AuthService,
              private toastr: ToastrService) { }

  ngOnInit() {
    this.getUser();
    this.initForm();
  }

  public initForm() {
    this.userForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', Validators.required]
    });
  }

  getUser() {
    const userId = this.authService.getUserId();
    this.userService.getUser(userId).subscribe((user) => {
      this.user = user;
    });
  }

  updateUser() {
    this.userService.updateUser(this.userForm.value).subscribe(
      (user: any) => {
        this.user = user;
        this.toastr.success('User updated!', 'Success!');
      },
      (errorResponse: HttpErrorResponse) => {
        this.toastr.error(errorResponse.error.errors[0].detail, 'Error');
      }
    );
  }

}
