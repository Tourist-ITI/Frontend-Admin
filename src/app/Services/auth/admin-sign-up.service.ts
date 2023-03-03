import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminSignUpService {

  constructor(private myHttp: HttpClient) { }
  private baseUrl = 'https://travel-8ztv.onrender.com/v1/users/sign-up/admin';

  //add admin
  addAdmin(admin: any) {
    return this.myHttp.post(this.baseUrl, admin); //return observable object
  };
}
