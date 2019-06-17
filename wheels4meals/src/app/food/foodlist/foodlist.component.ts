import { Component, OnInit } from '@angular/core';
import{FOODS} from 'src/app/food/foodList';
import { RESTAURANTS } from 'src/app/restaurant/restaurant';
import { Restaurant } from 'src/app/mock/restaurant';

@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
food=FOODS;
restaurants:Restaurant;
  constructor() { }

  ngOnInit() {
  }

}
