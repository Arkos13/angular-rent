import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Rental} from './rental.model';
import {environment} from '../../../environments/environment';

@Injectable()
export class RentalService {

  constructor(private http: HttpClient) {}

  public getRentals(): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/v1/rentals`);
  }

  public getRentalById(rentalId: string): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/v1/rentals/${rentalId}`);
  }

  public getRentalsByCity(city: string): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/v1/rentals?city=${city}`);
  }

  public createRental(rental: Rental): Observable<any> {
    return this.http.post(`${environment.apiURL}/api/v1/rentals/new`, rental);
  }

  public updateRental(rentalId: string, rentalData: any): Observable<any> {
    return this.http.patch(`${environment.apiURL}/api/v1/rentals/edit/${rentalId}`, rentalData);
  }

  public deleteRental(rentalId: string): Observable<any> {
    return this.http.delete(`${environment.apiURL}/api/v1/rentals/delete/${rentalId}`);
  }

  public getUserRentals(): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/v1/rentals/manage`);
  }

  public verifyRentalUser(rentalId: string): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/v1/rentals/${rentalId}/verify-user`);
  }
}
