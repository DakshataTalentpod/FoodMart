import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Restaurant } from "src/app/mock/restaurant";
import{RestaurantService} from '../restaurant.service';

@Component({
  selector: 'app-restaurantlist',
  templateUrl: './restaurantlist.component.html',
  styleUrls: ['./restaurantlist.component.css']
})
export class RestaurantlistComponent implements OnInit {

  restaurantlist:Restaurant[]=[];
restaurantSubcription:Subscription;
  constructor(private restaurantService:RestaurantService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.restaurantSubcription = this.restaurantService.restaurantObservable.subscribe(
      (data:Restaurant[]) => (this.restaurantlist=data)
    );
    this.restaurantService.getRestaurants();
  }
  // this.restaurants$ = this.route.paramMap.pipe(
  //     switchMap(params => {
  //       this.selectedId = +params.get('id');
  //       return this.service.getRestaurants();
  //     })
  //   );
    // console.log(heroes$);
  }


