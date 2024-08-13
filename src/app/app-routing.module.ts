import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
//   {
//     path: 'meeting',
//   loadChildren: () => import('./meeting/meeting.module').then(m => m.MeetingModule),
  
// },
{
  path: '',
loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),

},
{
  path: 'doctor',
loadChildren: () => import('./doctor/doctor.module').then(m => m.DoctorModule),

},
{
  path: 'patient',
loadChildren: () => import('./patient/patient.module').then(m => m.PatientModule),

},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
