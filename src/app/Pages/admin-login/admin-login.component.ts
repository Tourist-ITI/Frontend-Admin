import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminLogInService } from 'src/app/Services/auth/admin-log-in.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  flag: boolean;

  constructor(private adminLoginService: AdminLogInService) {
    this.flag = true;
  }

  ngOnInit(): void { }

  validationForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)])
  })

  login() {
    if (this.validationForm.valid) {
      this.flag = true;
      this.adminLoginService.loginAdmin(this.validationForm.value).subscribe();
      console.log(this.validationForm);
    }

    else {
      this.flag = false;
      console.log('Invalid Inputs');
      console.log(this.validationForm);
    }
  }


  get emailValid() {
    return this.validationForm.controls['email'].valid;
  }

  get passwordValid() {
    return this.validationForm.controls['password'].valid;
  }

  

}