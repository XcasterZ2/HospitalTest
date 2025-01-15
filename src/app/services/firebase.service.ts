import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

export interface Patient {
  name: string;
  vn: string;
  hn: string;
  id: string;
  drugAllergy: string;
}

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(private firestore: AngularFirestore) { }

  searchPatient(criteria: { vn?: string; hn?: string; id?: string }): Observable<Patient[]> {
    let query = this.firestore.collection<Patient>('patients');

    if (criteria.vn) {
      query = this.firestore.collection<Patient>('patients', ref => ref.where('vn', '==', criteria.vn));
    } else if (criteria.hn) {
      query = this.firestore.collection<Patient>('patients', ref => ref.where('hn', '==', criteria.hn));
    } else if (criteria.id) {
      query = this.firestore.collection<Patient>('patients', ref => ref.where('id', '==', criteria.id));
    }

    return query.valueChanges();
  }
}