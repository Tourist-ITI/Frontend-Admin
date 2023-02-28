import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CreateTourService {

  constructor(private http: HttpClient) { };

  baseUrl = 'https://travel-8ztv.onrender.com/v1/tours';


  addTour(tour: FormData) {

    return this.http.post(this.baseUrl, tour);  //return observable object

  }


}
