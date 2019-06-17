import { Orders } from './orders';

export class Issue{
    id: number;
    description: string;
    orders: Orders;
    date: string;
}