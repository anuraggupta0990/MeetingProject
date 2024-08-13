import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:7087/api/Zoom'; 

  constructor(private httpClient: HttpClient) { }

  login(email: string, password: string): Observable<any> {
    const body = { email, password };
    return this.httpClient.post<any>(`${this.apiUrl}/login`, body, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    });
  }

  authorizeZoom(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/authorize`);
  }

  // Method to handle the callback from Zoom and obtain the access token
  handleZoomCallback(code: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUrl}/callback?code=${code}`);
  }

  // Method to create a meeting using the access token
  createMeeting(accessToken: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}/create-meeting`, null, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${accessToken}`
      })
    });
  }
}




  // onSubmit():Observable<any>{
  //   return this.httpClient.get<any>('https://localhost:7087/api/Zoom/authorize');
  // }

  // onSubmitto(url:any):Observable<any>{
  //   return this.httpClient.get<any>(url);
  // }