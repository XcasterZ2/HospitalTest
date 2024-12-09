import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-content',
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent implements OnInit {

  // กำหนดค่าตัวแปร
  currentDate: string = '';
  selectedButtonIndex: number = 0;
  selectedButtonIndexDoctor: number = 0; 
  // วันที่
  ngOnInit() {
    this.currentDate = this.getCurrentThaiDate();
  }
  getCurrentThaiDate(): string {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear() + 543;
    return `${day}/${month}/${year}`;
    
  }

  // เคลียร์การค้นหา
  clearSearchInputs(): void {
    const searchInputs = document.querySelectorAll<HTMLInputElement>('input.search');
    searchInputs.forEach(input => {
      input.value = '';
    });
  }


  // ข้อความใน button แถวที่ 3
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
    'คัดกรอง CLCP',

  ];
  onButtonClick(index: number) {
    this.selectedButtonIndex = index;  // อัพเดตเมื่อกดปุ่ม
  }

  onButtonClickDoctor(index: number): void {
    this.selectedButtonIndexDoctor = index;
  }
}
