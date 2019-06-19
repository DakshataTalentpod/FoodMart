import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute,ParamMap  } from '@angular/router';
import { Restaurant } from "src/app/mock/restaurant";
import{RestaurantService} from '../restaurant.service';

@Component({
  selector: 'app-restaurantdetail',
  templateUrl: './restaurantdetail.component.html',
  styleUrls: ['./restaurantdetail.component.css']
})
export class RestaurantdetailComponent implements OnInit {
  rest$: Observable<Restaurant>;
  // selectedId: number;
  constructor(private service:RestaurantService,private route: ActivatedRoute) { }

  ngOnInit() {
    this.rest$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getRestaurant(params.get('id')))
    );
    // console.log(heroes$);
  }

}
