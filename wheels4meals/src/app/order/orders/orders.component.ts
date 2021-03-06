import { Component, OnInit } from '@angular/core';
import{Orders} from 'src/app/mock/orders';
import{OrderService} from '../order.service';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { OrderdetailsComponent } from '../orderdetails/orderdetails.component';
import { VieworderComponent } from '../vieworder/vieworder.component';
import { FoodService } from 'src/app/food/food.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderlist:Orders[]=[];
  orderSubcription:Subscription;
  liveOrderList:Orders[]=[];
  constructor(private orderService:OrderService,public dialog: MatDialog,private foodService: FoodService) { }

  ngOnInit() {
    this.orderSubcription = this.orderService.ordersObservable.subscribe(
      (data:Orders[]) => (this.orderlist=data)
    );
    this.orderSubcription = this.orderService.liveObservable.subscribe(data => {this.liveOrderList = data;console.log("data is",this.liveOrderList)});
    this.orderService.getOrders();
  }
  openDialog(id:number) {
    const dialogRef = this.dialog.open(OrderdetailsComponent,{
      data:{
        orderId:id
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  openviewDialog(){
    const dialogRef = this.dialog.open(VieworderComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


