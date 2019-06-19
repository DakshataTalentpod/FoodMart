import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Restaurant } from "src/app/mock/restaurant";
import {RESTAURANTS} from '../restaurant/restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  temp:Restaurant[];
  restaurantObservable: Subject<Restaurant[]>=new Subject<Restaurant[]>();
  constructor() { 
    this.temp = RESTAURANTS.slice();
  }
  getRestaurants() {
    this.restaurantObservable.next(this.temp);
    // return of(RESTAURANTS);
  }

  getRestaurant(id: number | string) {
    this.getRestaurants();
    return this.restaurantObservable.pipe(
      // (+) before `id` turns the string into a number
      map((rest: Restaurant[]) => rest.find(rest => rest.id === +id))
      //this.restaurantObservable.next(this.temp);
    );
  }

  //Filter restaurant//
  filterByRestaurantName(data){
    this.temp = RESTAURANTS.slice().filter((res=>res.name.toLowerCase().includes(data.toLowerCase())));
    this.restaurantObservable.next(this.temp);
}

//Sort By//
sortBy(orderBy,isAsc){
  if(orderBy!=''){
      this.temp = this.temp.slice().sort((a,b) => this.compareTo(a,b,isAsc,orderBy));
      this.restaurantObservable.next(this.temp);
  }
   
  }
  compareTo(a:Restaurant,b:Restaurant,isAsc,orderBy):number{
     return(a[orderBy]>b[orderBy]?1:-1)*(isAsc?1:-1);
  }
}
