import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
