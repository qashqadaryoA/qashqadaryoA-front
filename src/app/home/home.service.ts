import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Tuman } from '../model/tuman';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {
  [x: string]: any;
  api = environment.baseUrl + '/api/message';
  apiHomePage = environment.baseUrl + "api/message";
  constructor(public http: HttpClient) { }
  getAll(): Observable<any> {
    return this.http.get<any>(this.api + "/home-page");
  }
  getById(id:number): Observable<any> {
    return this.http.get<any>(this.api + "/"+id);
  }
  getLatestNews(pageNumber: number): Observable<any> {
    return this.http.get<any>(this.api + "/latest-news?page=" + pageNumber);
  }
  getSortView(): Observable<any> {
    return this.http.get<any>(this.api + "/sort-view");
  }
  getFilterType(id: number, pageNumber: number): Observable<any> {
    return this.http.get<any>(this.api + "/filter-type?typeId=" + id + "&page=" + pageNumber);
  }
  getFilterTuman(id: number, pageNumber: number): Observable<any> {
    return this.http.get<any>(this.api + "/filter-tuman?tumanId=" + id + "&page=" + pageNumber);
  }
  getFilterHashtags(hashtag1: any, hashtag2: any, hashtag3: any, hashtag4: any, pageNumber: number): Observable<any> {
    let txt="?page="+pageNumber;
    if(hashtag1!=null){
      txt += "&hashtag1="+hashtag1;
    }
    if(hashtag2!=null){
      txt += "&hashtag2="+hashtag2;
    }
    if(hashtag3!=null){
      txt += "&hashtag3="+hashtag3;
    }
    if(hashtag4!=null){
      txt += "&hashtag4="+hashtag4;
    }
    return this.http.get<any>(this.api + "/filter-hashtag"+txt);
  }
}
