import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.module';

@Injectable()
export class RentalService {
  private rentals: Rental[] = [
    {
      id: 1,
      title: 'Central Apartment',
      city: 'New York',
      street: 'Times Sqaure',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedroom: 3,
      description: 'Very nice apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: 2,
      title: 'Central Apartment',
      city: 'New York',
      street: 'Times Sqaure',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedroom: 3,
      description: 'Very nice apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    },
    {
      id: 3,
      title: 'Central Apartment',
      city: 'New York',
      street: 'Times Sqaure',
      category: 'apartment',
      image: 'http://via.placeholder.com/350x250',
      bedroom: 3,
      description: 'Very nice apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '24/12/2017'
    }
  ];

  public getRentals(): Observable<Rental[]> {
    return new Observable<Rental[]>((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
    });
  }

  public getRentalById(rentalId: number): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      setTimeout(() => {
       const foundRental = this.rentals.find((rental) => {
          return rentalId === rental.id;
        });
       observer.next(foundRental);
      }, 500);
    });
  }
}
