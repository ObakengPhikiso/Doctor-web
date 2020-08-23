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
import { OverviewComponent } from './components/doctors/doctor-profile/overview/overview.component';
import { LocationsComponent } from './components/doctors/doctor-profile/locations/locations.component';
import { HoursComponent } from './components/doctors/doctor-profile/hours/hours.component';
import { DashboardComponent } from './components/doctors/dashboard/dashboard.component';
import { SideBarComponent } from './components/doctors/dashboard/side-bar/side-bar.component';
import { StatsComponent } from './components/doctors/dashboard/stats/stats.component';
import { AppointmentsComponent } from './components/doctors/dashboard/appointments/appointments.component';
import { PatientsComponent } from './components/doctors/dashboard/patients/patients.component';
import { AppointmentsListComponent } from './components/doctors/dashboard/appointments-list/appointments-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    DoctorsComponent,
    LoginComponent,
    RegisterComponent,
    DoctorProfileComponent,
    DoctorListComponent,
    OverviewComponent,
    LocationsComponent,
    HoursComponent,
    DashboardComponent,
    SideBarComponent,
    StatsComponent,
    AppointmentsComponent,
    PatientsComponent,
    AppointmentsListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
