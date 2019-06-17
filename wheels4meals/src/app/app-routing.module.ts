import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignInComponent } from './auth/sign-in/sign-in.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { RestaurantlistComponent } from './restaurant/restaurantlist/restaurantlist.component';
import { CustomerComponent } from './dashboard/customer/customer.component';
import { RestaurantsearchComponent } from './restaurant/restaurantsearch/restaurantsearch.component';
import { FoodlistComponent } from './food/foodlist/foodlist.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  {
    path: 'signIn',
    component: SignInComponent,
    // outlet: 'popup'
  },
  {
    path: 'signOut',
    component: SignUpComponent,
    // outlet: 'popup'
  },
  {
    path: 'foodList/:id',
    component: FoodlistComponent,
    // outlet: 'popup'
  },
  {
    path: 'restaurant',
    component: CustomerComponent,
    // outlet: 'popup'
  },

  { path: '',   redirectTo: '/restaurant', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/