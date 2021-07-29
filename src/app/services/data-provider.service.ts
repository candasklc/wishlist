import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Data } from '../interfaces/data';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  dashiUrl = '../../assets/dashiWishlist.json';

  constructor(private http: HttpClient) { }

  getList(url): Observable<Data[]> {
    return this.http.get<Data[]>(url);
  }
}
