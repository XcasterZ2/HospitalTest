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

  setHn(hn: string) {
    this.hnSource.next(hn);
  }

  setVnId(vnId: string) {
    this.vnIdSource.next(vnId);
  }
}
