import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EventService {

  private _getItemUrl = 'http://localhost:3000/api/v1/item';
  private _searchUrl  = 'http://localhost:3000/search';

  constructor(private http: HttpClient) { }

  getToken() {
    return localStorage.getItem('token');
  }

  getItems() {
    return this.http.get<any>(this._getItemUrl);
  }

  addItem(item) {
    return this.http.post<any>(this._getItemUrl, item);
  }

  searchItem(searchItem) {
    return this.http.get<any>(this._searchUrl, searchItem.name);
  }

}
