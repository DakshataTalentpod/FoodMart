import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import{Orders} from '../mock/orders';
import { ORDERS } from './orderList';

@Injectable({
    providedIn: 'root'
  })
  export class OrderService {
      temp:Orders[];
      ordersObservable: Subject<Orders[]>=new Subject<Orders[]>();
    constructor() {
        this.temp=ORDERS.slice();
     }
     getOrders() {
        this.ordersObservable.next(this.temp);
      }
  }