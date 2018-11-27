import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {

  private _getItemUrl = 'http://localhost:3000/api/v1/item';

  constructor(private http: HttpClient) { }

  getItems() {
    return this.http.get<any>(this._getItemUrl);
  }

  addItem(item) {
    return this.http.post<any>(this._getItemUrl, item);
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
