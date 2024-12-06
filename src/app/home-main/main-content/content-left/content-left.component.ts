import { Component , Input} from '@angular/core';

@Component({
  selector: 'app-content-left',
  templateUrl: './content-left.component.html',
  styleUrl: './content-left.component.scss'
})
export class ContentLeftComponent {
  @Input() selectedButtonIndex: number = 0; // รับค่า selectedButtonIndex จาก parent
  @Input() selectedButtonIndexDoctor: number = 0;
  
  constructor() { }
}
