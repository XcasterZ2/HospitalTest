import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  isSidebarOpen = false;

  toggleSidebar(): void {
    console.log('Toggle sidebar:', !this.isSidebarOpen);
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  // ปิด sidebar เมื่อคลิก overlay (optional)
  closeSidebar() {
    this.isSidebarOpen = false;
  }

  openImageViewer(imageUrl: string) {
    // วิธีง่ายๆคือเปิดในแท็บใหม่
    window.open(imageUrl, '_blank');
    
    // หรือถ้าต้องการทำเป็น modal/lightbox สามารถใช้ไลบรารี่เพิ่มเติมได้
    // เช่น ngx-lightbox, photoviewer เป็นต้น
}
}
