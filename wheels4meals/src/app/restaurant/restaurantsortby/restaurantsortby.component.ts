import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../restaurant.service';
import { FormControl } from '@angular/forms';
import{SORT} from '../restaurant';
@Component({
  selector: 'app-restaurantsortby',
  templateUrl: './restaurantsortby.component.html',
  styleUrls: ['./restaurantsortby.component.css']
})
export class RestaurantsortbyComponent implements OnInit {
  sortBy=new FormControl();
  asc= true ;
  sortList = SORT;
  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
  }
  sort(){
    this.asc = !this.asc;
    this.restaurantService.sortBy(this.sortBy.value, this.asc );
  }
}
