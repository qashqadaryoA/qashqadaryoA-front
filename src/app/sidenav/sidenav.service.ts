import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CurrentService {
  api = 'https://nbu.uz/en/exchange-rates/json/';
  messager: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public http:HttpClient) { }
  getAllCurrency():Observable<any> {
    return this.http.get<any>(this.api);
  }
  
}