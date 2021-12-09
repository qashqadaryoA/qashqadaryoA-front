import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  api = environment.baseUrl + '/api';
  apiType= environment.baseUrl + "api";
  messager: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public http:HttpClient) { }
  getAllTypeStatus():Observable<any> {
    return this.http.get<any>(this.api+"/type/status");
  }
  getAllTumanStatus():Observable<any> {
    return this.http.get<any>(this.api+"/tuman/status");
  }
  navigation(){
    this.messager.next(true);
  }
}