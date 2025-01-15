import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database'; // Import AngularFireDatabase
import { Observable } from 'rxjs';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  isSidebarOpen = false;
  userName: string = ''; // Initialize userName
  hn: string = '';
  vnId: string = '';

  constructor(
    private db: AngularFireDatabase // Inject AngularFireDatabase
  ) {}

  ngOnInit(): void {
    this.getUserName();
  }

  getUserName(): void {
    this.db.object<{ name: string }>('users/yourUserId/name').valueChanges().subscribe((userData) => {
      if (userData) {
        this.userName = userData.name;
      }
    });
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