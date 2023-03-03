import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class UpdateTourService {

  constructor(private http: HttpClient) { }


  private baseUrl = 'https://travel-8ztv.onrender.com/v1/tours';

  // token = localStorage.getItem('token');
  // .set('Authorization', 'Bearer ' + this.token);

  headers = new HttpHeaders().set("Accept", "application/json")
    .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
    .set('Access-Control-Allow-Origin', '*');


    
  // update tour by tour's id
  updateAdminTour(tour: any, id: any) {

    return this.http.put(`${this.baseUrl}/${id}`, tour, { headers: this.headers });

  }

}
