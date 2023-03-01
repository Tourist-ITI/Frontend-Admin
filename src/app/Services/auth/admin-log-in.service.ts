import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminLogInService {

  isAuth = false;

  constructor(private myHttp: HttpClient, private route: Router) { }

  private baseUrl = 'https://travel-8ztv.onrender.com/v1/users/sign-in/admin';

  //login admin
  loginAdmin(admin: any) {
    return this.myHttp.post(this.baseUrl, admin); //return observable object
  }


  logout() {
    this.isAuth = false;
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    //name -image - email
    this.route.navigate(['']);
  }

  
  checkLogin() {
    return localStorage.getItem('token');
  }



}
