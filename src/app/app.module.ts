import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms'; // เพิ่ม FormsModule
import { HttpClientModule } from '@angular/common/http'; // สำหรับ HTTP requests

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomeSidebarComponent } from './home/home-sidebar/home-sidebar.component';
import { HomeHeadbarComponent } from './home/home-headbar/home-headbar.component';
import { HomeContentComponent } from './home/home-content/home-content.component';
import { HomeSidebarProfileComponent } from './home/home-sidebar/home-sidebar-profile/home-sidebar-profile.component';
import { HomeSidebarButtonComponent } from './home/home-sidebar/home-sidebar-button/home-sidebar-button.component';
import { HomeSidebarMenuListComponent } from './home/home-sidebar/home-sidebar-menu-list/home-sidebar-menu-list.component';
import { HomeHeaderInfoComponent } from './home/home-headbar/home-header-info/home-header-info.component';
import { HomeHeaderVitalSignComponent } from './home/home-headbar/home-header-vital-sign/home-header-vital-sign.component';
import { HomeHeaderHeadbarBtnComponent } from './home/home-headbar/home-header-headbar-btn/home-header-headbar-btn.component';
import { HomeMainComponent } from './home-main/home-main.component';
import { NavBarComponent } from './home-main/nav-bar/nav-bar.component';
import { NavMenuComponent } from './home-main/nav-bar/nav-menu/nav-menu.component';
import { MainContentComponent } from './home-main/main-content/main-content.component';
import { ContentLeftComponent } from './home-main/main-content/content-left/content-left.component';
import { ContentRightComponent } from './home-main/main-content/content-right/content-right.component';
import { DoctorScreenLeftComponent } from './home-main/main-content/content-left/doctor-screen-left/doctor-screen-left.component';
import { FilteringInfomationLeftComponent } from './home-main/main-content/content-left/filtering-infomation-left/filtering-infomation-left.component';
import { DoctorScreenRightComponent } from './home-main/main-content/content-right/doctor-screen-right/doctor-screen-right.component';
import { FilteringInfomationRightComponent } from './home-main/main-content/content-right/filtering-infomation-right/filtering-infomation-right.component';
import { NurseInfoLeftComponent } from './home-main/main-content/content-left/nurse-info-left/nurse-info-left.component';
import { NursingInfoRightComponent } from './home-main/main-content/content-right/nursing-info-right/nursing-info-right.component';
import { FilteringInformationRigtFemaleComponent } from './home-main/main-content/content-right/filtering-information-rigt-female/filtering-information-rigt-female.component';
import { environment } from '../environments/environment';
import { MainContentService } from './home-main/main-content/main-content.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeSidebarComponent, 
    HomeHeadbarComponent,
    HomeContentComponent,
    HomeSidebarProfileComponent,
    HomeSidebarButtonComponent,
    HomeSidebarMenuListComponent,
    HomeHeadbarComponent,
    HomeHeaderInfoComponent,
    HomeHeaderVitalSignComponent,
    HomeHeaderHeadbarBtnComponent,
    HomeMainComponent,
    NavBarComponent,
    NavMenuComponent,
    MainContentComponent,
    ContentLeftComponent,
    ContentRightComponent,
    DoctorScreenLeftComponent,
    FilteringInfomationLeftComponent,
    DoctorScreenRightComponent,
    FilteringInfomationRightComponent,
    NurseInfoLeftComponent,
    NursingInfoRightComponent,
    FilteringInformationRigtFemaleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [MainContentService],
  bootstrap: [AppComponent]
})

export class AppModule { }
