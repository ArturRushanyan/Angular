import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()

export class EventService {

  private _addItemUrl = 'http://localhost:3000/api/v1/item';

  constructor(private http: HttpClient) { }

  addItem(item) {
    return this.http.post<any>(this._addItemUrl, item);
  }

}
