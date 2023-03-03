import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DeleteTourService {

  baseUrl = 'https://travel-8ztv.onrender.com/v1/tours';

  constructor(private http: HttpClient) { }



  headers = new HttpHeaders()
    .set("Accept", "application/json")
    .set("Authorization", `Bearer ${localStorage.getItem("token")}`)
    .set('Access-Control-Allow-Origin', '*');

  //delete tour by tour's id and by token sent in headers
  deleteTourById(id: any) {

    return this.http.delete(`${this.baseUrl}/${id}`, { 'headers': this.headers })

  }

}
