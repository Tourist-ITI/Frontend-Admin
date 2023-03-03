import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class GetAdminTourService {

  constructor(private http: HttpClient) { }

  private baseUrl = 'https://travel-8ztv.onrender.com/v1/tours/organizer';

 //get admin's tour by admin's id
  getAdminTour(id: any) {

   return this.http.get(`${this.baseUrl}/${id}`);

  }

}
