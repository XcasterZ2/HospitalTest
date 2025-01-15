import { Component, OnInit } from '@angular/core';
import { FirebaseService, Patient } from '../../services/firebase.service';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.css']
})
export class MainContentComponent implements OnInit {
  searchCriteria = {
    vn: '',
    hn: '',
    id: '',
    drugAllergy: ''
  };
  
  patientData: Patient | null = null;
  currentDate: string = '';
  selectedButtonIndex: number = 0;
  selectedButtonIndexDoctor: number = 0;
  iconSrc = '/img/icon.png';
  iconAlt = 'Icon';

  buttons: string[] = [
    'Doctor Screen',
    'ข้อมูลการคัดกรอง',
    'ประวัติการค้นหา',
    'Image',
    'Scan',
    'Treatment (F1)',
    'Dental',
    'Lab (F3)',
    'X-Ray (F4)',
    'Refer',
    'ใบรับรองแพทย์',
    'Request OR',
    'Diag and ICD 10',
    'Medicine (F2)'
  ];

  buttons2: string[] = [
    'ซักประวัติหน้าห้องพยาบาล',
    'การพยาบาล',
    'เวชกรรมสังคม',
    'COVID-19',
    'การตรวจตา',
    'คลินิกระงับปวด',
    'อาชีวเวชกรรม',
    'MEMO',
    'MEMO จิตเวช',
    'คัดกรอง CLCP'
  ];

  constructor(private firebaseService: FirebaseService) { }

  ngOnInit(): void {
    // ตั้งค่าสำหรับการเริ่มต้นคอมโพเนนต์
    this.currentDate = this.getCurrentThaiDate();
  }

  getCurrentThaiDate(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear() + 543;
    return `${day}/${month}/${year}`;
  }

  /**
   * ค้นหาข้อมูลผู้ป่วยจาก Firestore
   */
  searchData(): void {
    const { vn, hn, id } = this.searchCriteria;

    if (!vn && !hn && !id) {
      alert('กรุณากรอก VN, HN หรือ ID อย่างน้อยหนึ่งช่อง');
      return;
    }

    this.firebaseService.searchPatient({ vn, hn, id }).subscribe((patients: Patient[]) => {
      if (patients.length > 0) {
        this.patientData = patients[0];
        // Update searchCriteria with patientData to display in input fields
        this.searchCriteria.vn = this.patientData.vn;
        this.searchCriteria.hn = this.patientData.hn;
        this.searchCriteria.id = this.patientData.id;
        this.searchCriteria.drugAllergy = this.patientData.drugAllergy;
      } else {
        // Handle case when no data is found
        this.clearSearchInputs();
        alert('No patient data found.');
      }
    }, error => {
      console.error('Error fetching patient data:', error);
      alert('An error occurred while searching for patient data.');
    });
  }

  /**
   * เคลียร์ฟิลด์ค้นหาและผลลัพธ์การค้นหา
   */
  clearSearchInputs(): void {
    this.searchCriteria = {
      vn: '',
      hn: '',
      id: '',
      drugAllergy: ''
    };
    this.patientData = null;
  }

  onButtonClick(index: number): void {
    this.selectedButtonIndex = index;
    // เพิ่มโค้ดเพิ่มเติมตามที่ต้องการ
  }

  onButtonClickDoctor(index: number): void {
    this.selectedButtonIndexDoctor = index;
    // เพิ่มโค้ดเพิ่มเติมตามที่ต้องการ
  }
}