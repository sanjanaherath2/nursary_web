import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';



@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    WelcomeComponent,
    AdminDashboardComponent,
    UserProfileComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
