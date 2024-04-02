import {Component, OnInit} from '@angular/core';
import {Hotel} from "../../domain/hotel.model";
import {HotelService} from "../../service/hotel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrl: './list-hotel.component.css'
})
export class ListHotelComponent implements OnInit{
  hotels: Hotel[] | undefined;
  selectedHotel!: Hotel;
  error: string | undefined;

  constructor(
    private hotelService: HotelService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels(): void {
    console.log("Calling getHotel");
    this.hotelService.getAllHotels().subscribe(
      (data : Hotel[]) => {
        console.log(data);
        this.hotels = data;
      }
    );
  }

  goToCreate() {
    this.router.navigate(['/hotels/create']);
  }

  onRowSelect(event: any) {
    this.router.navigate(['/hotels', this.selectedHotel.id]);
  }
}
