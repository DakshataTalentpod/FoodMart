import { User } from './user';

export class Review{
    id: number;
    ratings: number;
    user: User;
    description: string;
}