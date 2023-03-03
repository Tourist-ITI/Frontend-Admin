import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateTourService {

  constructor(private http: HttpClient) { };

  baseUrl = 'https://travel-8ztv.onrender.com/v1/tours';


  headers = new HttpHeaders()
    .set("Accept", "application/json")
    .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
    .set('Access-Control-Allow-Origin', '*');
    

// add tour by admin's token sent in headers
  addTour(tour: any) {

    console.log(tour);

    return this.http.post(this.baseUrl, tour, { 'headers': this.headers });
    //return observable object

  }


}
