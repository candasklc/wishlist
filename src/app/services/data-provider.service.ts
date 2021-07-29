import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DashiData } from './../interfaces/dashi-data';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {
  getUrl = '../../assets/dashiWishlist.json';

  constructor(private http: HttpClient) { }

  getList(): Observable<DashiData[]> {
    return this.http.get<DashiData[]>(this.getUrl);
  }
}
