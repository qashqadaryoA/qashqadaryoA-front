import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageTwoService {
  api = environment.baseUrl + '/api/youtube-link';
  apiHomePage = environment.baseUrl + "api/youtube-link";
  constructor(public http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(this.api + "/status");
  }
}