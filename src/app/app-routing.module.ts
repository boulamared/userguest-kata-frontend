import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {CreateHotelComponent} from "./components/create-hotel/create-hotel.component";
import {ListHotelComponent} from "./components/list-hotel/list-hotel.component";
import {DetailHotelComponent} from "./components/detail-hotel/detail-hotel.component";
import {CreateNotificationComponent} from "./components/create-notification/create-notification.component";
import {DetailNotificationComponent} from "./components/detail-notification/detail-notification.component";

const routes: Routes = [
  { path: '', component: ListHotelComponent },
  { path: 'hotels', component: ListHotelComponent },
  { path: 'hotels/create', component: CreateHotelComponent },
  { path: 'hotels/:id', component: DetailHotelComponent },
  { path: 'hotels/:id/notifications', component: DetailHotelComponent },
  { path: 'hotels/:id/notifications/create', component: CreateNotificationComponent },
  { path: 'hotels/:id/notifications/:idNotification', component: DetailNotificationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
