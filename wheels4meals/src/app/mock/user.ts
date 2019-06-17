import { ContactDetails } from './contactDetails';

export class User{
    id?: number;
    name: string;
    userName: string;
    password: string;
    role?: string;
    age?: number;
    gender?: string;
    contactDetails: ContactDetails;
}