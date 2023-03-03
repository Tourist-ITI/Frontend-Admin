import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class UpdateAdminService {

  constructor(private myHttp: HttpClient) { }

  private baseUrl = 'https://travel-8ztv.onrender.com/v1/user/profile';
  token = localStorage.getItem('token');

  // get admin by id
  getUserById(adminId: any) {
    return this.myHttp.get(`${this.baseUrl}/${adminId}`);
  }



  // update admin
  updateUser(admin: any) {
    const head = new HttpHeaders().set('Authorization', 'Bearer ' + this.token);

    return this.myHttp.patch(this.baseUrl, admin, {
      headers: head,
    });
  }




}
