import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '../interfaces/data';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  dashiUrl = 'https://candasklc.github.io/lists/dashiList.json';

  constructor(private http: HttpClient) { }

  getList(url: string): Observable<Data[]> {
    return this.http.get<Data[]>(url);
  }

  addItem(item: Data): Observable<Data> {
    return this.http.post<Data>(this.dashiUrl, item, httpOptions);
  }
}
