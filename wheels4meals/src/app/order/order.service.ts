import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import{Orders} from '../mock/orders';
import { ORDERS } from './orderList';
import { FoodQuantity } from '../mock/foodQuantity';
import { Cart } from '../mock/cart';

@Injectable({
    providedIn: 'root'
  })
  export class OrderService {
      temp:Orders[];
      liveOrder:Orders[]
      ordersObservable: Subject<Orders[]>=new Subject<Orders[]>();
      liveObservable: Subject<Orders[]> = new Subject<Orders[]>();
    constructor() {
        this.temp=ORDERS.slice();
        this.liveOrder = [];
     }
     getOrders() {
        this.ordersObservable.next(this.temp);
      }

      getOrder(id: number | string) {
        this.getOrders();
        return this.ordersObservable.pipe(
          map((order: Orders[]) => order.find(order => order.id === +id))
        );
      }

      checkOutFun(value:FoodQuantity[]){
      
        let order = new Orders();
        order.id = 1001;
        order.date = new Date().getDate().toString();
        order.cart = this.getCartInstance(value);
        
        this.liveOrder.push(order)
        this.liveObservable.next(this.liveOrder)

        
        // foodQuantity.quantity =1;
        // foodQuantity.totalPrice = food.price
         
      }
      getCartInstance(foodQuantity:FoodQuantity[]):Cart{
        let cart = new Cart();
        cart.id = 103;
        cart.foodQuantityList = foodQuantity;
        cart.grandTotal = 0;  
        foodQuantity.forEach(data => (cart.grandTotal += data.totalPrice));
        console.log(cart.grandTotal);

        return cart;
      }
      // addOrder(form){
      //   this.temp.push({});
      // }
  }