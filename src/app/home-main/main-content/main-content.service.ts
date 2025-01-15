import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface PatientData {
  vn?: string;
  hn?: string;
  id?: string;
  [key: string]: any;  // Allow for additional properties
}

@Injectable({
  providedIn: 'root'
})
export class MainContentService {

  constructor(private firestore: AngularFirestore) { }

  getPatientData(vn: string, hn: string, id: string): Observable<any> {
    let query: any = {};

    if (vn) query.vn = vn;
    if (hn) query.hn = hn;
    if (id) query.id = id;

    return this.firestore.collection('patients', ref => ref.where('vn', '==', vn)
                                                          .where('hn', '==', hn)
                                                          .where('id', '==', id))
                         .snapshotChanges()
                         .pipe(
                           map(actions => actions.map(a => {
                             const data = a.payload.doc.data() as PatientData;
                             const id = a.payload.doc.id;
                             return { id, ...data };
                           }))
                         );
  }

  /**
   * ค้นหาข้อมูลผู้ป่วยตาม VN, HN, และ ID
   * @param vn หมายเลข VN
   * @param hn หมายเลข HN
   * @param id หมายเลข ID
   * @returns Observable ของข้อมูลผู้ป่วย
   */
  searchPatient(vn: string, hn: string, id: string): Observable<any> {
    return this.firestore.collection('patients', ref => {
      let query: firebase.default.firestore.CollectionReference | firebase.default.firestore.Query = ref;
      if (vn) query = query.where('vn', '==', vn);
      if (hn) query = query.where('hn', '==', hn);
      if (id) query = query.where('id', '==', id);
      return query;
    }).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as PatientData;
        const docId = a.payload.doc.id;
        return { docId, ...data };
      }))
    );
  }
}
