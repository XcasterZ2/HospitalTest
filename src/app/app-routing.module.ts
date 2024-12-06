import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeMainComponent } from './home-main/home-main.component'; // นำเข้า HomeMainComponent

const routes: Routes = [
  { path: 'home-main', component: HomeMainComponent }, // เส้นทาง /home-main

  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'home', component: HomeContentComponent }, // เส้นทาง /home
    ],
  },
  { path: '**', redirectTo: 'home' }, // เส้นทางใดๆ ที่ไม่ตรง จะ Redirect ไป /home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
