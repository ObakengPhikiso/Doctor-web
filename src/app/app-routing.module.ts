import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { RegisterComponent } from './components/register/register.component';
import { DoctorProfileComponent } from './components/doctors/doctor-profile/doctor-profile.component';
import { DashboardComponent } from './components/doctors/dashboard/dashboard.component';
import { AppointmentsComponent } from './components/doctors/dashboard/appointments/appointments.component';
import { PatientsComponent } from './components/doctors/dashboard/patients/patients.component';
import { AppointmentsListComponent } from './components/doctors/dashboard/appointments-list/appointments-list.component';

const routes: Routes = [

  { path: '', redirectTo: 'doctors', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent, pathMatch: 'full' },
  { path: 'doctors', component: DoctorsComponent, pathMatch: 'full' },
  { path: 'doc-profile/:id', component: DoctorProfileComponent, pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent, children: [
      { path: 'appointments', component: AppointmentsComponent },
      { path: 'appointments-list', component: AppointmentsListComponent },
      { path: 'patients', component: PatientsComponent },
      { path: '', redirectTo: 'appointments', pathMatch: 'full' },
      { path: '**', redirectTo: 'appointments', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: 'doctors', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
