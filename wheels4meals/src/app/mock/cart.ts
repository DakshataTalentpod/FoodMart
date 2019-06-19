import { FoodQuantity } from './foodQuantity';
import { Offers } from './offers';

export class Cart{
    id: number;
    foodQuantityList: FoodQuantity[];
    grantTotal: number;
}