import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ZoomcallbackComponent } from './zoomcallback/zoomcallback.component';

export const routes: Routes = [
  {path: 'dashboard',component:DashboardComponent},
  { path: 'zoom-callback', component: ZoomcallbackComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }