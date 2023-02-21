import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminSignupComponent } from './Pages/admin-signup/admin-signup.component';
import { AdminLoginComponent } from './Pages/admin-login/admin-login.component';
import { AdminHomeComponent } from './Pages/admin-home/admin-home.component';
import { AdminProfileComponent } from './Pages/admin-profile/admin-profile.component';
import { AdminCreateTourComponent } from './Pages/admin-create-tour/admin-create-tour.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminSignupComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    AdminCreateTourComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
