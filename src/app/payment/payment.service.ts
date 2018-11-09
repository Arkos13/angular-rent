import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Payment} from './shared/payment.model';

@Injectable()
export class PaymentService {
  constructor(private http: HttpClient) {}
  public getPendingPayments(): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/v1/payments`);
  }
  public acceptPayment(payment: Payment): Observable<any> {
    return this.http.post(`${environment.apiURL}/api/v1/payments/confirm`, payment);
  }
  public declinePayment(payment: Payment): Observable<any> {
    return this.http.post(`${environment.apiURL}/api/v1/payments/decline`, payment);
  }
}
