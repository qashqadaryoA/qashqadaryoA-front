import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-type-page',
  templateUrl: './type-page.component.html',
  styleUrls: ['./type-page.component.scss']
})
export class TypePageComponent implements OnInit {
  id?:any;
  pageNumber:number=0;
  typeMessages:Message[] = [];
  constructor(private homePageService:HomePageService,private activeRoute: ActivatedRoute,private router:Router) { }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    window.scroll({
      top : 0
    });
    this.activeRoute.paramMap.subscribe(data =>{
      this.id = data.get("id");
    });
    this.homePageService.getFilterType(this.id,this.pageNumber).subscribe(data => {
      this.typeMessages = data.content;
    });
  }
  koproq(){
    this.pageNumber =  this.pageNumber + 1;
    this.homePageService.getFilterType(this.id,this.pageNumber).subscribe(data => {
      this.typeMessages = this.typeMessages.concat(data.content);
    });
  }
  openMessage(id: any){
    this.router.navigate(['message', id]);
  }  
}
