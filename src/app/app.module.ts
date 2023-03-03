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
import { AdminGreetingComponent } from './Containers/adminHome-page/admin-greeting/admin-greeting.component';
import { AdminHeaderComponent } from './Containers/adminHome-page/admin-header/admin-header.component';
import { AdminOverviewComponent } from './Containers/adminHome-page/admin-overview/admin-overview.component';
import { OffCanvasComponent } from './Containers/adminHome-page/off-canvas/off-canvas.component';
import { AdminSearchComponent } from './Containers/adminHome-page/admin-search/admin-search.component';
import { AdminModifyCardComponent } from './Containers/adminHome-page/admin-modify-card/admin-modify-card.component';
import { ErrorComponent } from './Pages/error/error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    AdminSignupComponent,
    AdminLoginComponent,
    AdminHomeComponent,
    AdminProfileComponent,
    AdminCreateTourComponent,
    AdminGreetingComponent,
    AdminHeaderComponent,
    AdminOverviewComponent,
    OffCanvasComponent,
    AdminSearchComponent,
    AdminModifyCardComponent,
    ErrorComponent,

  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
