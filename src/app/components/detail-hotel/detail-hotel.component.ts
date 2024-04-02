import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../domain/hotel.model";
import {ActivatedRoute, Router} from "@angular/router";
import {HotelService} from "../../service/hotel.service";
import {MessageService} from "primeng/api";
import {Notification} from "../../domain/notification.model";

@Component({
  selector: 'app-detail-hotel',
  templateUrl: './detail-hotel.component.html',
  styleUrl: './detail-hotel.component.css',
  providers: [MessageService]
})
export class DetailHotelComponent implements OnInit{

  hotel: Hotel | null = null;
  notifications : Notification[] = [];
  selectedNotification : Notification = new Notification(0,"", new Date());

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService,
    private messageService: MessageService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const hotelId = parseInt(params.get('id') || '', 10);
      if (!isNaN(hotelId)) {
        this.getHotelDetails(hotelId);
      }
    });
  }

  getHotelDetails(hotelId: number): void {
    this.hotelService.getHotelById(hotelId).subscribe({
      next: (hotel: Hotel) => {
        this.hotel = hotel;
        this.hotelService.getHotelNotifications(hotelId).subscribe((data : Notification[])=> {
          this.notifications = data;
        });
      },
      error: (error) => {
        this.messageService.add({ severity: 'warning', summary: 'Hotel Details', detail: 'Error fetching hotel details:' });
      }
    });
  }

  onRowSelect(event: any) {
    this.router.navigate(['hotels/' + this.hotel?.id+ '/notifications/', this.selectedNotification.id]);
  }

  goToCreate() {
    this.router.navigate(['hotels/' + this.hotel?.id+ '/notifications/create' ]);
  }

  backToParent() {
    this.router.navigate(['hotels/']);
  }

}
