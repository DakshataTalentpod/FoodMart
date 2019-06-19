import { Component, OnInit } from '@angular/core';
import{Orders} from 'src/app/mock/orders';
import{OrderService} from '../order.service';
import { Subscription } from 'rxjs';
import {MatDialog} from '@angular/material/dialog';
import { OrderdetailsComponent } from '../orderdetails/orderdetails.component';
import { VieworderComponent } from '../vieworder/vieworder.component';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orderlist:Orders[]=[];
  orderSubcription:Subscription;
  constructor(private orderService:OrderService,public dialog: MatDialog) { }

  ngOnInit() {
    this.orderSubcription = this.orderService.ordersObservable.subscribe(
      (data:Orders[]) => (this.orderlist=data)
    );
    this.orderService.getOrders();
  }
  openDialog() {
    const dialogRef = this.dialog.open(OrderdetailsComponent);

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


