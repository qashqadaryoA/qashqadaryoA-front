import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-tuman-page',
  templateUrl: './tuman-page.component.html',
  styleUrls: ['./tuman-page.component.scss']
})
export class TumanPageComponent implements OnInit {
  id?:any;
  pageNumber:number=0;
  tumanMessages:Message[] = [];
  reklama1:any;
  reklama2:any;
  constructor(private homePageService:HomePageService,
    private activeRoute: ActivatedRoute,
    private router:Router,
    private navbarService:NavbarService) { }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    window.scroll({
      top : 0
    });
    this.activeRoute.paramMap.subscribe(data =>{
      this.pageNumber=0;
      this.id = data.get("id");
      this.homePageService.getFilterTuman(this.id,this.pageNumber).subscribe(data => {
        this.tumanMessages = data.content;      
        this.navbarService.getAllAdversitement().subscribe(data => {
          if(data.length>0){
            if(data.length==2){
              this.reklama1 = data[0];
              this.reklama2 = data[1];
            }
            else{
              if(data[0].daraja==1){
                this.reklama1=data[0];
              }
              else{
                this.reklama2=data[0];
              }
            }
          }
        });
      });
    });
  }
  koproq(){
    this.pageNumber =  this.pageNumber + 1;
    this.homePageService.getFilterTuman(this.id,this.pageNumber).subscribe(data => {
      this.tumanMessages = this.tumanMessages.concat(data.content);
      
    });
  }
  openMessage(id:any,caption:any){
    this.router.navigate(["message",id,caption]);
  }
  rekOpen(url:any){
    location.href=url;
  }
}
