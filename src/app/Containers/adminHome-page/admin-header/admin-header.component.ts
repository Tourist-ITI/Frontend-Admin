import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { AdminLogInService } from 'src/app/Services/auth/admin-log-in.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})


export class AdminHeaderComponent implements OnInit, AfterViewChecked {

  // view name and photo in navbar
  username = localStorage.getItem('username');
  photo = localStorage.getItem('photo');


  constructor(private AdminLoginService: AdminLogInService) { }


  ngAfterViewChecked(): void { };

  // check if there is a token in local storage?
  loginStatus = this.AdminLoginService.checkLogin();

  ngOnInit(): void { };



  logOut() {

    this.AdminLoginService.logout();
  }



}
