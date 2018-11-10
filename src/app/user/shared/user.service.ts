import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable()
export class UserService {
  constructor(private http: HttpClient) {}
  public getUser(userId: string): Observable<any> {
    return this.http.get(`${environment.apiURL}/api/v1/users/${userId}`);
  }
  public updateUser(userData: any): Observable<any> {
    return this.http.patch(`${environment.apiURL}/api/v1/users/edit`, userData);
  }
}
