import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Data } from '../interfaces/data';
import { Observable} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'X-Master-Key': 'sEm47xATe7MJZcCc.xte733phiRcq'
  })
};

@Injectable({
  providedIn: 'root'
})
export class DataProviderService {

  constructor(private http: HttpClient) { }

  getList(url: string): Observable<Data[]> {
    return this.http.get<Data[]>(url, httpOptions);
  }

  addItem(item: any, url: string): Observable<Data> {
    return this.http.put<Data>(url, item, httpOptions);
  }
}
