import { Component, OnInit, VERSION } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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

  ngOnInit() {}

  onSubmit() {}
}
