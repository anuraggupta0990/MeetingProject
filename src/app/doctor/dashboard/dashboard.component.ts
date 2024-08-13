import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { PatientsService } from '../services/patients.service';
// import { MeetingsService } from '../services/meetings.service';
export interface Patient {
  id: number;
  name: string;
  age: number;
  email: string;
  phone: string;
}

const ELEMENT_DATA: Patient[] = [
  {id: 1, name: 'John Doe', age: 30, email: 'john.doe@example.com', phone: '123-456-7890'},
  {id: 2, name: 'Jane Smith', age: 25, email: 'jane.smith@example.com', phone: '987-654-3210'},
  // Add more patient data here
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  displayedColumns: string[] = ['id', 'name', 'age', 'email', 'phone', 'actions'];
  dataSource = ELEMENT_DATA;

  startMeeting(patient: Patient) {
    // Implement the logic to start a meeting for the individual patient
    console.log(`Start Meeting button clicked for patient ID: ${patient.id}`);
  }
}
