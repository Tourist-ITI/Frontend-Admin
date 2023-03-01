import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminSignUpService } from 'src/app/Services/auth/admin-sign-up.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-signup',
  templateUrl: './admin-signup.component.html',
  styleUrls: ['./admin-signup.component.css'],
})
export class AdminSignupComponent implements OnInit {


  constructor(
    private adminSignUpService: AdminSignUpService,
    private router: Router
  ) { }

  ngOnInit(): void { }

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
      Validators.minLength(16),
      Validators.maxLength(16),
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


  // -------------------for admin signup ---------------------

  signUp() {
    if (this.isValidPassword(this.validationForm.value)) {

      this.adminSignUpService.addAdmin(this.validationForm.value).subscribe(

        {
          next: (res) => {
            console.log(res);

            //sweetAlert Succes
            Swal.fire('Thank You...', 'You Logged In Successfully', 'success');

            //Routing to admin login page 
            this.router.navigate(['/admin/login']);


          },

          error: (err) => {

            Swal.fire('Sorry....', 'Invalid Email or Password', 'error');

            console.log(err);
          }
        }

      );


      console.log(this.validationForm.value);

    } else {
      console.log('Password Not Matched');
    }
  }

  checkForm() {
    if (this.validationForm.valid) {
      this.signUp();
    } else {

      Swal.fire('Opss....', 'Please Fill All Inputs', 'error');


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
