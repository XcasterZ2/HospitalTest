// src/app/home-main/main-content/content-right/filtering-infomation-right/filtering-infomation-right.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-filtering-infomation-right',
  templateUrl: './filtering-infomation-right.component.html',
  styleUrls: ['./filtering-infomation-right.component.css']
})
export class FilteringInfomationRightComponent {
  allergyType: string = '';
  allergyText: string = '';
  isSpecifyDisabled: boolean = false;

  surgeryType: string = '';
  surgeryText: string = '';
  surgeryYear: string = '';
  cannotRemember: boolean = false;

  isOtherChecked: boolean = false;
  isOtherChecked1: boolean = false;

  vaccineType: string = '';
  vaccineText: string = '';

  diabetesType: string = '';
  diabetesClinic: string = '';

  pressureType: string = '';
  pressureClinic: string = '';

  // ฟังก์ชันอื่นๆ ตามที่ใช้งานในเทมเพลต
  onAllergyTypeChange() {
    // ตัวอย่างการเปลี่ยนแปลงสถานะ
    if (this.allergyType === 'specify') {
      this.isSpecifyDisabled = false;
    } else {
      this.isSpecifyDisabled = true;
      this.allergyText = '';
    }
  }
}