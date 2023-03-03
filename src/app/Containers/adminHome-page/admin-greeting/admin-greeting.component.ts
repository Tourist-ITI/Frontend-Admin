import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-greeting',
  templateUrl: './admin-greeting.component.html',
  styleUrls: ['./admin-greeting.component.css']
})
export class AdminGreetingComponent implements OnInit {

  constructor() { }
  ngOnInit(): void { };

  username = localStorage.getItem('username');


}
