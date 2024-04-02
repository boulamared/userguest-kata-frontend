import {Component, OnInit} from '@angular/core';
import {Click, Notification} from "../../domain/notification.model";
import {ActivatedRoute, Router} from "@angular/router";
import {MessageService} from "primeng/api";
import {NotificationService} from "../../service/notification.service";
import {NotificationPerformance} from "../../domain/notification-performance.model.t";


@Component({
  selector: 'app-detail-notification',
  templateUrl: './detail-notification.component.html',
  styleUrl: './detail-notification.component.css',
  providers: [MessageService]
})
export class DetailNotificationComponent implements OnInit{

  notification : Notification | null = null;
  notificationPerformance : NotificationPerformance  = new NotificationPerformance(0,0,0,0,0);
  rangeDates: Date[] = [new Date(), new Date(new Date().setDate(new Date().getDate()  + 5))];

  constructor(
    private route: ActivatedRoute,
    private notificationService: NotificationService,
    private messageService: MessageService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const notificationId = parseInt(params.get('id') || '', 10);
      if (!isNaN(notificationId)) {
        this.getNotificationPerformance(notificationId);
      }
    });
  }

  getNotificationPerformance(notificationId : number) {
    this.notificationService.getNotificationById(notificationId).subscribe((data : Notification) => {
      this.notification = data;
      this.notificationService.getNotificationPerformance(notificationId,this.rangeDates[0],this.rangeDates[1]).subscribe((data: NotificationPerformance) => {
        this.notificationPerformance = data;
      })
    });
  }

  getCurrentNotificationPerformance() {
    if(this.notification) {
      this.getNotificationPerformance(this.notification?.id);
    }
  }

  addClick() {
    if(this.notification) {
      this.notificationService.addClick(this.notification.id, new Click("Simulated Click")).subscribe((data) => {
        this.messageService.add({ severity : "success", summary : "Click", detail : "Click Added to the notification"});
        this.getCurrentNotificationPerformance();
      })
    }
  }

  addConversion() {
    if(this.notification) {
      this.notificationService.addConversion(this.notification.id, new Click("Simulated Conversion")).subscribe((data) => {
        this.messageService.add({ severity : "success", summary : "Conversion", detail : "Conversion Added to the notification"});
        this.getCurrentNotificationPerformance();
      })
    }
  }

  addImpression() {
    if(this.notification) {
      this.notificationService.addImpression(this.notification.id, new Click("Simulated Impression")).subscribe((data) => {
        this.messageService.add({ severity : "success", summary : "Impression", detail : "Impression Added to the notification"});
        this.getCurrentNotificationPerformance();
      })
    }
  }

  backToParent() {
    this.router.navigate(['hotels/', this.notification?.id]);
  }


}
