import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://firestore.googleapis.com/v1/projects/YOUR_PROJECT_ID/databases/(default)/documents/users'; // Replace with your actual Firestore URL

  constructor(private http: HttpClient) {}

  getUserName(hn: string, vnId: string): Observable<string> {
    return this.http.get<any>(`${this.apiUrl}/${hn}`)
      .pipe(
        map(response => {
          console.log('API Response:', response);
          const fields = response.fields;
          return fields ? fields.name.stringValue : 'ผู้ใช้ไม่รู้จัก';
        }),
        catchError(error => {
          console.error('Error fetching user name:', error);
          return of('ผู้ใช้ไม่รู้จัก');
        })
      );
  }

  getAllergyInfo(hn: string, vnId: string): Observable<string> {
    console.log('Fetching allergy info with HN:', hn, 'and VN ID:', vnId);
    return this.http.get<{ allergy: string }>(`${this.apiUrl}/allergy?hn=${hn}&vnId=${vnId}`)
      .pipe(
        map(response => {
          console.log('API response for allergy:', response);
          return response.allergy;
        }),
        catchError(error => {
          console.error('Error fetching allergy info:', error);
          return of('No allergy information available');
        })
      );
  }
}