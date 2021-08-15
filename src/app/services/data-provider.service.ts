import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DataInterface } from '../interfaces/data';
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

  getList(url: string): Observable<DataInterface[]> {
    return this.http.get<DataInterface[]>(url, httpOptions);
  }

  addItem(list: DataInterface[], url: string): Observable<DataInterface[]> {
    return this.http.put<DataInterface[]>(url, list, httpOptions);
  }
}
