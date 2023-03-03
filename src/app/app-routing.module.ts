import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminCreateTourComponent } from './Pages/admin-create-tour/admin-create-tour.component';
import { AdminHomeComponent } from './Pages/admin-home/admin-home.component';
import { AdminLoginComponent } from './Pages/admin-login/admin-login.component';
import { AdminProfileComponent } from './Pages/admin-profile/admin-profile.component';
import { AdminSignupComponent } from './Pages/admin-signup/admin-signup.component';
import { ErrorComponent } from './Pages/error/error.component';

const routes: Routes = [
  { path: 'admin/home/:id', component: AdminHomeComponent },
  { path: 'admin/login', component: AdminLoginComponent, },
  { path: 'admin/signup', component: AdminSignupComponent },
  {
    path: 'admin/createtour/:id', component: AdminCreateTourComponent
  },
  { path: 'admin/profile/:id', component: AdminProfileComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
