import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Hotel} from "../domain/hotel.model";
import {Notification} from "../domain/notification.model";

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private baseUrl = 'http://localhost:8080/hotels';

  constructor(private http: HttpClient) { }

  getAllHotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.baseUrl);
  }

  getHotelById(id: number): Observable<Hotel> {
    return this.http.get<Hotel>(`${this.baseUrl}/${id}`);
  }

  createHotel(hotel: Hotel | undefined): Observable<Hotel> {
    return this.http.post<Hotel>(this.baseUrl, hotel);
  }

  getHotelNotifications(id: number): Observable<Notification[]> {
    return this.http.get<Notification[]>(`${this.baseUrl}/${id}/notifications`);
  }

  createNotification(hotelId: number, notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(`${this.baseUrl}/${hotelId}/notifications`, notification);
  }

  updateHotel(id: number, hotel: Hotel): Observable<Hotel> {
    return this.http.put<Hotel>(`${this.baseUrl}/${id}`, hotel);
  }

  deleteHotel(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
}
