import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NavbarService {
  api = environment.baseUrl + '/api/type';
  apiType= environment.baseUrl + "api/type";
  messager: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(public http:HttpClient) { }
  getAllStatus():Observable<any> {
    return this.http.get<any>(this.api+"/status");
  }
  navigation(){
    this.messager.next(true);
  }
}