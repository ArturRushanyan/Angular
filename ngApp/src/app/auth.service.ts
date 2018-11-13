import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AuthService {

  private _registerUrl = 'http://localhost:3000/authentication/signup';
  private _loginUrl = 'http://localhost:3000/authentication/login';
  constructor(private http: HttpClient) { }

  registerUser(user) {
    return this.http.post<any>(this._registerUrl, user);
  }

  loginUser(user) {
    return this.http.post<any>(this._loginUrl, user);
  }

}