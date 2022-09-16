import { Component, OnInit, VERSION, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  FormGroupDirective,
  Validators,
} from '@angular/forms';
import { MatTable } from '@angular/material/table';

export interface UserModel {
  id: string;
  firstName: string;
  lastName: string;
  gender: string;
  dob: Date;
  phone: number;
  company: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css'],
})
export class UserRegistrationComponent implements OnInit {
  @ViewChild('noteForm', { static: true }) noteForm: FormGroupDirective;
  // @ViewChild('table', { static: true }) table: MatTable<any>;
  @ViewChild('table') table: MatTable<Element>;
  genderList = ['Male', 'Female'];
  userDetailList: UserModel[] = [];
  displayedColumns = ['position', 'firstName', 'lastName', 'email', 'phone', 'company', 'dob', 'action'];

  userForm: FormGroup = this.fb.group({
    id: this.fb.control(null),
    firstName: this.fb.control(null, [Validators.required]),
    lastName: this.fb.control(null, [Validators.required]),
    gender: this.fb.control(null, [Validators.required]),
    dob: this.fb.control(null, [Validators.required]),
    phone: this.fb.control(null, [Validators.required]),
    company: this.fb.control(null, [Validators.required]),
    email: this.fb.control(null, [Validators.required]),
    password: this.fb.control(null, [Validators.required]),
    confirmPassword: this.fb.control(null, [Validators.required]),
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    if (JSON.parse(localStorage.getItem('User List'))) {
      this.userDetailList = JSON.parse(localStorage.getItem('User List'));
    }
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }

    this.userDetailList = this.userDetailList?.length
      ? this.userDetailList
      : [];
    let userDetails: UserModel = this.userForm.getRawValue() as UserModel;
    userDetails.id = userDetails.id
      ? userDetails.id
      : 'USER_' + (this.userDetailList?.length + 1);
    if (
      this.userDetailList?.length &&
      this.userDetailList?.some((user) => user.id == userDetails.id)
    ) {
      let index = this.userDetailList.findIndex((r) => r.id == userDetails.id);
      this.userDetailList[index] = userDetails;
    } else {
      this.userDetailList.push(userDetails);
    }
    console.log(' this.userDetailList ', this.userDetailList);
    setTimeout(() => {
      if (this.userDetailList && this.userDetailList.length) {
          this.table.renderRows();
      }
  },1500);  
  localStorage.setItem('User List', JSON.stringify(this.userDetailList));
    this.clear();
  }

  editUser(userDetail : UserModel){
    this.userForm.patchValue(userDetail);
  }

  deleteUser(index: number){
    this.userDetailList.splice(index, 1);
    setTimeout(() => {
        if (this.userDetailList?.length) {
            this.table.renderRows();
        }
    });
    localStorage.setItem('User List', JSON.stringify(this.userDetailList));
  }

  clear() {
    this.userForm.reset();
    this.noteForm.resetForm();
  }
}
