import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";
import {HotelService} from "../../service/hotel.service";
import {Hotel} from "../../domain/hotel.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrl: './create-hotel.component.css',
  providers: [MessageService]
})
export class CreateHotelComponent implements OnInit{
  hotel: Hotel = new Hotel(0,"","");

  constructor(
    private hotelService: HotelService,
    private messageService: MessageService,
    private router: Router) { }

  ngOnInit(): void {
  }

  showMessageToast(message : string, severity : string, summary : string) {
    this.messageService.add({ severity: severity, summary: summary, detail: message });
  }

  onSubmit(): void {
    if(this.hotel.name && this.hotel.key) {
      this.hotelService.createHotel(this.hotel)
        .subscribe((data : Hotel) => {
          this.hotel = new Hotel(0,"","");
          this.showMessageToast('Hotel created successfully !','success', 'Hotel creation')
          this.router.navigate(['/hotels']);
        });
    } else {
      this.showMessageToast('Please check your inputs !','warning', 'Hotel creation')
    }
  }

  backToParent() {
    this.router.navigate(['hotels/']);
  }
}
