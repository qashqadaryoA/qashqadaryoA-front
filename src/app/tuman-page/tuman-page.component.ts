import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-tuman-page',
  templateUrl: './tuman-page.component.html',
  styleUrls: ['./tuman-page.component.scss']
})
export class TumanPageComponent implements OnInit {
  id?:any;
  pageNumber:number=0;
  tumanMessages:Message[] = [];
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
    this.homePageService.getFilterTuman(this.id,this.pageNumber).subscribe(data => {
      this.tumanMessages = data.content;
    });
  }
  koproq(){
    this.pageNumber =  this.pageNumber + 1;
    this.homePageService.getFilterTuman(this.id,this.pageNumber).subscribe(data => {
      this.tumanMessages = this.tumanMessages.concat(data.content);
    });
  }
  
  openMessage(id: any){
    this.router.navigate(['message', id]);
  }  
}
