import {map} from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import * as moment from 'moment';
import {environment} from '../../../environments/environment';

const jwt = new JwtHelperService();

class DecodedToken {
  exp = 0;
  username = '';
}

@Injectable()
export class AuthService {
  private decodedToken;

  constructor(private http: HttpClient) {
    this.decodedToken = JSON.parse(localStorage.getItem('app_meta')) || new DecodedToken();
  }

  private saveToken(token: string): string {
    this.decodedToken = jwt.decodeToken(token);
    localStorage.setItem('app_auth', token);
    localStorage.setItem('app_meta', JSON.stringify(this.decodedToken));
    return token;
  }

  private getExpiration() {
    return moment.unix(this.decodedToken.exp);
  }

  public register(userData: any): Observable<any> {
    return this.http.post(`${environment.apiURL}/api/v1/register`, userData);
  }

  public login(userData: any): Observable<any> {
    return this.http.post(`${environment.apiURL}/api/v1/auth`, userData).pipe(map(
      (token: string) => this.saveToken(token)
    ));
  }

  public logout() {
    localStorage.removeItem('app_auth');
    localStorage.removeItem('app_meta');
    this.decodedToken = new DecodedToken();
  }

  public isAuthenticated(): boolean {
    return moment().isBefore(this.getExpiration());
  }

  public getAuthToken(): string {
    return localStorage.getItem('app_auth');
  }

  public getUsername(): string {
    return this.decodedToken.username;
  }

  public getUserId(): string {
    return this.decodedToken.userId;
  }
}
