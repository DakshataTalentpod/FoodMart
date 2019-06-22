import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import{FOODS} from 'src/app/food/foodList';
import{FoodService} from '../food.service';
import { RESTAURANTS } from 'src/app/restaurant/restaurant';
import { Restaurant } from 'src/app/mock/restaurant';
import { Food } from 'src/app/mock/food';


@Component({
  selector: 'app-foodlist',
  templateUrl: './foodlist.component.html',
  styleUrls: ['./foodlist.component.css']
})
export class FoodlistComponent implements OnInit {
food$: Observable<Food[]>;
selectedId:number;
foodCart:Food[];
  constructor( private route: ActivatedRoute,
    private router: Router,
    private service: FoodService) { }

  ngOnInit() {
    this.food$ = this.route.paramMap.pipe(
      switchMap(params => {
        this.selectedId = +params.get('id');
        return this.service.getFoods(this.selectedId);
      })
    )
    console.log(this.food$);
    this.food$.forEach(data=>console.log(data))
  }
  addToCart(food1:Food){
    this.service.addToCart(food1)
    // this.service.cartObservable.subscribe(data => this.foodCart = data )
  }
  searchCategory(category){
    this.food$ = this.service.getCategoryFood(category);
  }
}
