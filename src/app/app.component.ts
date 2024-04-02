import {Component, OnInit} from '@angular/core';
import {Hotel} from "./domain/hotel.model";
import {HotelService} from "./service/hotel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hnms';
}
