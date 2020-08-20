import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorProfileComponent } from './components/doctors/doctor-profile/doctor-profile.component';
import { DoctorListComponent } from './components/doctors/doctor-list/doctor-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DoctorsComponent,
    LoginComponent,
    RegisterComponent,
    DoctorProfileComponent,
    DoctorListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
