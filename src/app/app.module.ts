import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import {AdminDashboardComponent} from './components/admin/admin-dashboard/admin-dashboard.component';
import { UserProfileComponent } from './components/user/user-profile/user-profile.component';
import { AuthComponent } from './components/auth/auth.component';
import { SignInComponent } from './components/auth/sign-in/sign-in.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';




@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    NavbarComponent,
    WelcomeComponent,
    AdminDashboardComponent,
    UserProfileComponent,
    AuthComponent,
    SignInComponent,
    RegisterComponent
   
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
 	AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
