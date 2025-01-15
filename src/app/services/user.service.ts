import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'https://api.example.com/users'; // เปลี่ยนเป็น URL API จริงของคุณ

  constructor(private http: HttpClient) { }

  getUserName(hn: string, vnId: string): Observable<string> {
    console.log('เรียก API เพื่อดึงชื่อผู้ใช้ด้วย HN:', hn, 'และ VN ID:', vnId);
    return this.http.get<{ name: string }>(`${this.apiUrl}?hn=${hn}&vnId=${vnId}`)
      .pipe(
        map(response => {
          console.log('API ตอบกลับ:', response);
          return response.name;
        }),
        catchError(error => {
          console.error('เกิดข้อผิดพลาดในการเรียก API:', error);
          return of('ผู้ใช้ไม่รู้จัก');
        })
      );
  }
}