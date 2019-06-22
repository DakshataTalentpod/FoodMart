import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Food } from "src/app/mock/food";
import {FOODS} from 'src/app/food/foodList';
import { FoodQuantity } from '../mock/foodQuantity';

@Injectable({
  providedIn: 'root'
})
export class FoodService {
temp:Food[];
cartObservable:Subject<FoodQuantity[]> = new Subject<FoodQuantity[]>();
foodObservable: Subject<Food[]>=new Subject<Food[]>();
cartArray = [];
totalAmount = [];

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
  addToCart(food:Food){
 
    let tempFoodQ = this.cartArray.find(foodQ=>(foodQ.food == food));
    if(tempFoodQ==null)
    this.cartArray.push({food:food,quantity:1,totalPrice:food.price});
    else
    this.cartArray.forEach(foodQ => 
      {tempFoodQ.totalPrice=((tempFoodQ.quantity<10)?++tempFoodQ.quantity:tempFoodQ.quantity)*tempFoodQ.food.price;
        foodQ==tempFoodQ})

      //this.totalAmount.push(food.price);
    this.cartObservable.next(this.cartArray);
  }
  getFoodsAdded(){
    this.cartObservable.next(this.cartArray);
  }
  updateCartObservable(data){
    this.cartArray = data;
    console.log(data)
    this.cartObservable.next(this.cartArray);
    this.cartObservable.forEach(data=>console.log(data));
  }
  getCategoryFood(category){
    // FOODS.forEach(food => console.log(food.category.toString().toLowerCase().replace(" ","").search(category.toLowerCase().replace(" ",""))));
    return of(this.temp.filter(food => (food.category.toString().toLowerCase().replace(" ","").indexOf(category.toLowerCase().replace(" ","")))!=-1));
}
}
