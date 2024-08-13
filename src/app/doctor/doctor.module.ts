import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorRoutingModule } from './doctor-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MeetingComponent } from './meeting/meeting.component';
import { ZoomcallbackComponent } from './zoomcallback/zoomcallback.component';






@NgModule({
  declarations: [
    DashboardComponent,
    MeetingComponent,
    ZoomcallbackComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatCardModule,
  ]
})
export class DoctorModule { }
