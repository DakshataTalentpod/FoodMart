import { User } from './user';
import { Notification } from './notification';
import { FoodReview } from './foodReview';
import { Orders } from './orders';
import { Address } from './address';

export class Restaurant{
    id: number;
    name: string;
    manager: User;
    fassaiId: string;
    gstNumber: string;
    imageUrl:string;
    cuisine:string[];
    address:Address;
    timings: string;
    reviewList: FoodReview[];
    orderList: Orders[];
    notification: Notification; 
}