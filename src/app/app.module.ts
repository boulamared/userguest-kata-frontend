import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from "@angular/common/http";
import {TableModule} from "primeng/table";
import {PanelModule} from "primeng/panel";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {BadgeModule} from "primeng/badge";
import { CreateHotelComponent } from './components/create-hotel/create-hotel.component';
import {FormsModule} from "@angular/forms";
import { ListHotelComponent } from './components/list-hotel/list-hotel.component';
import {InputTextModule} from "primeng/inputtext";
import { MessagesModule } from 'primeng/messages';
import { ToastModule } from 'primeng/toast';
import { DetailHotelComponent } from './components/detail-hotel/detail-hotel.component';
import { DetailNotificationComponent } from './components/detail-notification/detail-notification.component';
import { CreateNotificationComponent } from './components/create-notification/create-notification.component';
import {DividerModule} from "primeng/divider";
import {DatePipe} from "@angular/common";
import {CalendarModule} from "primeng/calendar";
import {BreadcrumbModule} from "primeng/breadcrumb";

@NgModule({
  declarations: [
    AppComponent,
    CreateHotelComponent,
    ListHotelComponent,
    DetailHotelComponent,
    DetailNotificationComponent,
    CreateNotificationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    HttpClientModule,
    TableModule,
    PanelModule,
    BrowserAnimationsModule,
    BadgeModule,
    FormsModule,
    InputTextModule,
    MessagesModule,
    ToastModule,
    DividerModule,
    CalendarModule,
    BreadcrumbModule
  ],
  providers: [DatePipe,],
  bootstrap: [AppComponent]
})
export class AppModule { }
