import { Component, OnInit } from '@angular/core';
import{RESTAURANTS} from 'src/app/restaurant/restaurant';
import {MatTableDataSource} from '@angular/material/table';
import { Restaurant } from 'src/app/mock/restaurant';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
restaurant=RESTAURANTS;
name:string;
isAsc: boolean = true;




  constructor() { }

  ngOnInit() {
  }
 Search(){
   this.restaurant=this.restaurant.filter(res=>{
     return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
   });
 }

 sortData() {
    return this.restaurant.sort((a,b) => 
    a.name.localeCompare(b.name)
    );
 
}
sortDataasc() {
  return this.restaurant.sort((a,b) => 
  b.name.localeCompare(a.name)
  );

}

}
