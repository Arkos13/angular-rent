import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Booking} from './booking.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class BookingService {
  constructor(private http: HttpClient) {}
  public createBooking(booking: Booking): Observable<any> {
    return this.http.post(`${environment.apiURL}/api/v1/bookings/new`, booking);
  }
  public getUserBookings(): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/v1/bookings`);
  }
}
