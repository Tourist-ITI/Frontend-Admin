import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminLogInService } from 'src/app/Services/auth/admin-log-in.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {


  constructor(private adminLoginService: AdminLogInService, private router: Router) {
  }

  ngOnInit(): void { }

  validationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })


  // -------------------for admin logging ---------------------
  login() {
    if (this.validationForm.valid) {
      
      this.adminLoginService.loginAdmin(this.validationForm.value).subscribe(

        {
          next: (res: any) => {

            console.log(res);

            //image
            localStorage.setItem('token', res.data.access_token);
            localStorage.setItem('id', res.data.userBody._id);
            localStorage.setItem('username', res.data.userBody.username);
            localStorage.setItem('phone', res.data.userBody.phone);
            localStorage.setItem('email', res.data.userBody.email);
            localStorage.setItem('ssn', res.data.userBody.ssn);
            localStorage.setItem('photo', res.data.userBody.photo);
            localStorage.setItem('visited_tours', res.data.userBody.visited_tours);

            //sweetAlert Succes
            Swal.fire('Thank You...', 'You Logged In Successfully', 'success');

            //Routing to admin home page 
            this.router.navigate([`/admin/home/${localStorage.getItem('id')}`]);


          },


          error: (err) => {

            Swal.fire('Sorry....', 'Invalid Email or Password', 'error');
            console.log(err);


          }
        }

      );
      console.log(this.validationForm);
    }

    else {

      Swal.fire('Oops...', 'Please Fill All Inputs', 'error');
      console.log(this.validationForm);
    }
  }

// --------------------validation for inputs------------
  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }

  get passwordValid() {
    return this.validationForm.controls['password'].valid;
  }



}