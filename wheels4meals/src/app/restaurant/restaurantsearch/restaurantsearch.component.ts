import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';
import { RESTAURANTS } from '../restaurant';
import { FormControl } from '@angular/forms';
import { RestaurantService } from '../restaurant.service';

@Component({
  selector: 'app-restaurantsearch',
  templateUrl: './restaurantsearch.component.html',
  styleUrls: ['./restaurantsearch.component.css']
})
export class RestaurantsearchComponent implements OnInit {
  restaurantName=new FormControl();
  constructor(private restaurantService:RestaurantService) { }
  // restaurant=RESTAURANTS;
  // name:string;
  ngOnInit() {
  }
  search(){
    this.restaurantService.filterByRestaurantName(this.restaurantName.value);
  }
  // Search(){
  //   this.restaurant=this.restaurant.filter(res=>{
  //     return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  //   });
  // }
}
