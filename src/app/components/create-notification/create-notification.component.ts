import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../domain/hotel.model";
import {MessageService} from "primeng/api";
import {Notification} from "../../domain/notification.model";
import {HotelService} from "../../service/hotel.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-create-notification',
  templateUrl: './create-notification.component.html',
  styleUrl: './create-notification.component.css',
  providers: [MessageService]
})
export class CreateNotificationComponent implements OnInit{
  hotel: Hotel | null = null;
  notification : Notification = new Notification(0,"", new Date());

  constructor(
    private messageService: MessageService,
    private hotelService : HotelService,
    private router: Router,
    private route : ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const hotelId = parseInt(params.get('id') || '', 10);
      if (!isNaN(hotelId)) {
        this.hotelService.getHotelById(hotelId).subscribe((data : Hotel)=> this.hotel = data);
      }
    });
    }

  showMessageToast(message : string, severity : string, summary : string) {
    this.messageService.add({ severity: severity, summary: summary, detail: message });
  }

  onSubmit(): void {
    if(this.hotel && this.notification.message) {
      this.hotelService.createNotification(this.hotel?.id, this.notification)
        .subscribe((data : Notification) => {
          this.showMessageToast('Notification created successfully !','success', 'Hotel Notification creation')
          this.router.navigate(['/hotels', this.hotel?.id]);
        });
    } else {
      this.showMessageToast('Please check your inputs !','warning', 'Notification creation')
    }
  }
  backToParent() {
    this.router.navigate(['hotels/', this.hotel?.id]);
  }
}
