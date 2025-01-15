import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private hnSource = new BehaviorSubject<string>('');
  private vnIdSource = new BehaviorSubject<string>('');

  hn$ = this.hnSource.asObservable();
  vnId$ = this.vnIdSource.asObservable();

  hn: string = '';
  vnId: string = '';

  setHn(hn: string): void {
    console.log('ตั้งค่า HN เป็น:', hn);
    this.hnSource.next(hn);
  }

  setVnId(vnId: string): void {
    console.log('ตั้งค่า VN ID เป็น:', vnId);
    this.vnIdSource.next(vnId);
  }

  onSubmit() {
    this.setHn(this.hn);
    this.setVnId(this.vnId);
  }
} 