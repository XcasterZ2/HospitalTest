import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filtering-infomation-right',
  templateUrl: './filtering-infomation-right.component.html',
  styleUrl: './filtering-infomation-right.component.scss'
})
export class FilteringInfomationRightComponent implements OnInit {
  allergyType: string = '';
  allergyText: string = '';
  isSpecifyDisabled: boolean = false;
  surgeryType: string = '';
  surgeryText: string = '';
  surgeryYear: string = '';
  isOtherChecked: boolean = false;
  isOtherChecked1: boolean = false;
  vaccineType: string = '';
  vaccineText: string = '';
  diabetesType: string = '';
  pressureType: string = '';

  ngOnInit() {
    this.resetAllValues();
  }

  resetAllValues() {
    this.allergyType = '';
    this.allergyText = '';
    this.isSpecifyDisabled = false;

    this.surgeryType = '';
    this.surgeryText = '';
    this.surgeryYear = '';

    this.isOtherChecked = false;
    this.isOtherChecked1 = false;

    this.vaccineType = '';
    this.vaccineText = '';

    this.diabetesType = '';
    this.pressureType = '';
  }

  onAllergyTypeChange() {
    if (this.allergyType !== 'specify') {
      this.allergyText = '';
    }
  }
}
