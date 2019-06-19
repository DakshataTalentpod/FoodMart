import { User } from './user';
import { Notification } from './notification';

export class DeliveryPartner{
    partner: User[];
    drivingLicence: string;
    vehicleNumber: string;
    availability: Boolean;
    verificationStatus: Boolean;
    notification: Notification[];
}