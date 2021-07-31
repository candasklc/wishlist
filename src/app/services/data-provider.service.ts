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
  dashiPostUrl = 'https://api.jsonbin.io/b/6103f5f52ccb97077c14f4b4';
  djuliUrl = 'https://api.jsonbin.io/b/6103fed7046287097ea37fb4';

  constructor(private http: HttpClient) { }

  getList(url: string): Observable<Data[]> {
    return this.http.get<Data[]>(url, httpOptions);
  }

  addItem(item: any, url: string): Observable<Data> {
    return this.http.put<Data>(url, item, httpOptions);
  }
}
