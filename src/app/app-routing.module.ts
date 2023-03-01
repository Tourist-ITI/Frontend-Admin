import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthGuardGuard } from './Guards/admin-auth-guard.guard';
import { AdminCreateTourComponent } from './Pages/admin-create-tour/admin-create-tour.component';
import { AdminHomeComponent } from './Pages/admin-home/admin-home.component';
import { AdminLoginComponent } from './Pages/admin-login/admin-login.component';
import { AdminProfileComponent } from './Pages/admin-profile/admin-profile.component';
import { AdminSignupComponent } from './Pages/admin-signup/admin-signup.component';

const routes: Routes = [
  { path: '', component: AdminHomeComponent },
  { path: 'admin/home', component: AdminHomeComponent },
  { path: 'admin/login', component: AdminLoginComponent, },
  { path: 'admin/signup', component: AdminSignupComponent },
  {
    path: 'admin/createtour', component: AdminCreateTourComponent
  },
  { path: 'admin/:id', component: AdminProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
