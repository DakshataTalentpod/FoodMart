import { User } from './user';
import { Address } from './address';
import { FoodReview } from './foodReview';
import { InnerSubscriber } from 'rxjs/internal/InnerSubscriber';
import { Cart } from './cart';
import { Payment } from './payment';
import { DeliveryPartner } from './deliveryPartner';
import { Status } from './status';
import { Issue } from './issue';
import { DeliveryPartnerReview } from './deliveryPartnerReview';

export class Orders{
    id: number;
    date:string;
    cart: Cart;
    payment: Payment;
    deliveryPartner: DeliveryPartner;
    userName: User;
    statusList: Status[];
    address: Address;
    foodReview: FoodReview;
    issue: Issue;
    deliveryPartnerReview: DeliveryPartnerReview;
}