import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeMainComponent } from './home-main/home-main.component'; // นำเข้า HomeMainComponent

const routes: Routes = [
 
  {
    path: '',
    component: HomeMainComponent,
    children: [
      { path: 'home-main', component: HomeMainComponent }, // เส้นทาง /home-main
    ],
  },
  { path: '**', redirectTo: 'home-main', pathMatch: 'full' }, // แก้เส้นทางไม่พบให้ไปที่ /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
