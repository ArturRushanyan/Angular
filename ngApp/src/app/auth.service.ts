import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private _baseUrl = 'http://localhost:3000/authentication/';
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._baseUrl + 'signup', user);
  }

  loginUser(user) {
    return this.http.post<any>(this._baseUrl + 'login', user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

}
