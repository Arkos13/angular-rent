import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) {}
  public getPendingPayments(): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/v1/payments`);
  }
}
