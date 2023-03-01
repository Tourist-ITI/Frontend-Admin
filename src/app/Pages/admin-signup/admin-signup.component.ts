import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminSignUpService } from 'src/app/Services/auth/admin-sign-up.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css'],
})
export class AdminSignupComponent implements OnInit {
  flag: boolean;

  constructor(
    private adminSignUpService: AdminSignUpService,
    private router: Router
  ) {
    this.flag = true;
  }

  ngOnInit(): void {}

  validationForm = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.pattern('[a-zA-Z ]*'),
    ]),
    phone: new FormControl('', [
      Validators.required,
      Validators.minLength(11),
      Validators.maxLength(11),
    ]),
    nationalId: new FormControl('', [
      Validators.required,
      Validators.minLength(14),
      Validators.maxLength(14),
    ]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    confirm_password: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  isValidPassword(values: any) {
    const { password, confirm_password } = values;

    return password === confirm_password;
  }

  signUp() {
    if (this.isValidPassword(this.validationForm.value)) {
    
      this.flag = true;
      this.adminSignUpService.addAdmin(this.validationForm.value).subscribe();
      console.log(this.validationForm.value);
    } else {
      console.log('Password Not Matched');
    }
  }

  checkForm() {
    if (this.validationForm.valid) {
      this.signUp();
    } else {
      this.flag = false;
      console.log('Inputs Not Valid');
      console.log(this.validationForm);
    }
  }

  get nameValid() {
    return this.validationForm.controls['username'].valid;
  }
  get phoneValid() {
    return this.validationForm.controls['phone'].valid;
  }
  get nationalIdValid() {
    return this.validationForm.controls['nationalId'].valid;
  }
  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }
  get passwordValid() {
    return this.validationForm.controls['password'].valid;
  }
  get confirmPasswordValid() {
    return this.validationForm.controls['confirm_password'].valid;
  }
}
