import {Booking} from '../../booking/shared/booking.model';


export class Payment {
  fromUser: any;
  fromStripeCustomerId: string;
  toUser: any;
  booking: Booking;
  amount: number;
  tokenId: string;
  charge: any;
  status: string;
}
