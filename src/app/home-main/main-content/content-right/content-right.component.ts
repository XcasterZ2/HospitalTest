import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-right',
  templateUrl: './content-right.component.html',
  styleUrl: './content-right.component.scss'
})
export class ContentRightComponent {
  @Input() selectedButtonIndex: number = 0;
  @Input() selectedButtonIndexDoctor: number = 0;
  isButtonPressed: boolean = false;
  isNursingPage: boolean = true;  // เพิ่มตัวแปรนี้

  constructor() { }

  ngOnInit(): void {
  }
}
