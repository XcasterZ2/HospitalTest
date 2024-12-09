import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-content-right',
  templateUrl: './content-right.component.html',
  styleUrl: './content-right.component.scss'
})
export class ContentRightComponent {
  @Input() selectedButtonIndex: number = 0;
  @Input() selectedButtonIndexDoctor: number = 0;



  // ... existing code ...
isButtonPressed: boolean = false;

// ฟังก์ชันที่เรียกเมื่อปุ่มถูกกด
onButtonClick() {
    this.isButtonPressed = true;
}
// ... existing code ...
}
