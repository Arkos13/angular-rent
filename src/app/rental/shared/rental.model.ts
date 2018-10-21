import {Booking} from '../../booking/shared/booking.model';

export class Rental {
  static readonly CATEGORIES = ['house', 'apartment', 'condo'];
  _id: string;
  title: string;
  city: string;
  street: string;
  category: string;
  image: string;
  bedroom: number;
  description: string;
  dailyRate: number;
  shared: boolean;
  bedrooms: number;
  createdAt: string;
  bookings: Booking[];
  user: any;
}

