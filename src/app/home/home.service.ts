import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  api = environment.baseUrl + '/api/message';
  apiHomePage= environment.baseUrl + "api/message";
  constructor(public http:HttpClient) { }
  getAll():Observable<any> {
    return this.http.get<any>(this.api+"/home-page");
  }
  getLatestNews(pageNumber:number):Observable<any> {
    return this.http.get<any>(this.api+"/latest-news?page="+pageNumber);
  }
  getSortView():Observable<any> {
    return this.http.get<any>(this.api+"/sort-view");
  }
  getFilterType(id:number,pageNumber:number):Observable<any> {
      return this.http.get<any>(this.api+"/filter-type?typeId="+id+"&page="+pageNumber);
  }
}
