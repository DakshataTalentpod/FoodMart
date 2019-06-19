import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Food } from "src/app/mock/food";
import {FOODS} from 'src/app/food/foodList';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
temp:Food[];
foodObservable: Subject<Food[]>=new Subject<Food[]>();

  constructor() { 
    this.temp=FOODS.slice();
  }

  getFoods(restaurantId) {
    return of(FOODS.filter(food => food.restaurantId === +restaurantId));
  }

  getFood(id: number | string) {
    return this.getFoods(id).pipe(
      map((foods: Food[]) => foods.find(food => food.id === +id))
    );
  }

    //Filter Foods//
    filterByFoodType(data){
      this.temp = FOODS.slice().filter((food=>food.cuisine.toLowerCase().includes(data.toLowerCase())));
      this.foodObservable.next(this.temp);
  }
}
