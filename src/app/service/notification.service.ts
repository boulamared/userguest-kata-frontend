import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Click, Conversion, Impression, Notification} from "../domain/notification.model";
import {DatePipe} from "@angular/common";

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private baseUrl = 'http://localhost:8080/notifications';

  constructor(private http: HttpClient, private datePipe: DatePipe) { }

  getNotificationById(notificationId: number): Observable<Notification> {
    return this.http.get<Notification>(`${this.baseUrl}/${notificationId}`);
  }

  updateNotification(notificationId: number, notification: Notification): Observable<Notification> {
    return this.http.put<Notification>(`${this.baseUrl}/${notificationId}`, notification);
  }

  deleteNotification(notificationId: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${notificationId}`);
  }

  getNotificationPerformance(notificationId: number, startDate: Date, endDate: Date): Observable<any> {
    let params = new HttpParams();
    params = params.append('startDate', startDate.toISOString());
    params = params.append('endDate', endDate.toISOString());
    return this.http.get<any>(`${this.baseUrl}/${notificationId}/performance`, {params});
  }

  addClick(notificationId: number, click: Click): Observable<Click> {
    return this.http.post<Click>(`${this.baseUrl}/${notificationId}/click`, click);
  }

  addImpression(notificationId: number, impression: Impression): Observable<Impression> {
    return this.http.post<Impression>(`${this.baseUrl}/${notificationId}/impression`, impression);
  }

  addConversion(notificationId: number, conversion: Conversion): Observable<Conversion> {
    return this.http.post<Conversion>(`${this.baseUrl}/${notificationId}/conversion`, conversion);
  }

}
