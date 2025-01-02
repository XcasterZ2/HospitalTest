import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-screen-left',
  templateUrl: './doctor-screen-left.component.html',
  styleUrls: ['./doctor-screen-left.component.scss']
})
export class DoctorScreenLeftComponent {
  peText: string = '';
  peEntries: { [key: string]: string } = {};

  onPEChange(part: string, status: string) {
    const newEntry = `${part}: ${status}\n`;
    this.peText += newEntry;
    
    this.peEntries[part] = status;


    this.peText = Object.entries(this.peEntries)
    .map(([part, status]) => `${part}: ${status}`)
    .join('\n');
  }
  
}

