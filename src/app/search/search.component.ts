import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from '../home/home.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  pageNumber:number=0;
  searchText!:string;
  searchMessages?:any=[];
  constructor(private homePageService:HomePageService,private router:Router) { }

  ngOnInit(): void {
    window.scroll({
      top : 0
    });
  }
  search(){
    this.pageNumber=0;
    this.searchMessages=[];
    this.searchText = (<HTMLInputElement>document.getElementById("input")).value;
    this.koproq();
  }
  koproq(){
    this.homePageService.getSearch(this.searchText,this.pageNumber).subscribe(data => {
      this.searchMessages = this.searchMessages.concat(data.content);
      this.pageNumber =  this.pageNumber + 1;
    });
  }
  openMessage(id:any,caption:any){
    this.router.navigate(["message",id,caption]);
  }
}
