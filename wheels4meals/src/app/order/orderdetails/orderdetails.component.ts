import { Component, OnInit, Inject } from '@angular/core';
import{Orders} from 'src/app/mock/orders';
import{OrderService} from '../order.service';
import { Subscription, Observable } from 'rxjs';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-orderdetails',
  templateUrl: './orderdetails.component.html',
  styleUrls: ['./orderdetails.component.css']
})
export class OrderdetailsComponent implements OnInit {
  order$: Observable<Orders>;
  order:Orders;
  constructor(private orderService:OrderService,private route: ActivatedRoute,@Inject(MAT_DIALOG_DATA) public data:any) {

   }

  ngOnInit() {
    
    this.order$ = this.orderService.getOrder(this.data.orderId)
   this.order$.subscribe(data => {this.order = data})
    //this.orderService.ordersObservable.subscribe(data=>console.log(data));
    this.orderService.getOrders()
      // this.order$.subscribe(order=>this.order=order)
      // this.order$.forEach(data=>console.log(data))
      // console.log('restaurant', this.dialogRef.data);
  }
  
}
