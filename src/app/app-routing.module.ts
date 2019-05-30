import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import {UserProfileComponent} from './components/user/user-profile/user-profile.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: LandingComponent},

   

 // Auth routes
 {path: 'register', component: RegisterComponent},
 {path:'sign-in', component: SignInComponent},

 // admin routes
 { path: 'admin-dashboard', component: AdminDashboardComponent},
 

 // user routes
 {path: 'user-profile', component: UserProfileComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
