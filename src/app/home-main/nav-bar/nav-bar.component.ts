import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'; // Import AngularFireDatabase
import { Observable } from 'rxjs';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isSidebarOpen = false;
  userName: string = 'ผู้ใช้ไม่รู้จัก'; // Default value
  hn: string = '';
  vnId: string = '';
  allergyInfo: string = ''; // Add variable for allergy information

  constructor(
    private db: AngularFireDatabase, // Inject AngularFireDatabase
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.hn = 'some-hn-value';  // Replace with actual value or logic to set this
    this.vnId = 'some-vnId-value';  // Replace with actual value or logic to set this

    this.userService.getUserName(this.hn, this.vnId).subscribe(
      (name: string) => {
        if (name) {
          this.userName = name;
        } else {
          console.error('No user name found');
        }
      },
      (error) => {
        console.error('Error fetching user name:', error);
      }
    );

    // Fetch allergy information
    this.userService.getAllergyInfo(this.hn, this.vnId).subscribe(
      (allergy: string) => {
        this.allergyInfo = allergy;
      },
      (error) => {
        console.error('Error fetching allergy information:', error);
      }
    );
  }

  toggleSidebar(): void {
    console.log('Toggle sidebar:', !this.isSidebarOpen);
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  closeSidebar() {
    this.isSidebarOpen = false;
  }

  openImageViewer(imagePath: string): void {
    window.open(imagePath, '_blank');
  }
}