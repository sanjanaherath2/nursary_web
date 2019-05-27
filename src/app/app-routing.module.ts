import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import { from } from 'rxjs';

const routes: Routes = [
  { path: '', component: LandingComponent},

 // admin routes
 {path:'/dashboard',  component:AdminDashboardComponent}

 // user routes





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
