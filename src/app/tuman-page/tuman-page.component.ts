import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../app.module';
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
  nom?:any;
  pageNumber:number=0;
  tumanMessages:Message[] = [];
  reklama1:any;
  reklama2:any;
  load?:Boolean;
  h1?:Boolean;
  h1Text?:String="Юкланмоқда...";
  dataText:String = "Малумот ёқ";
  dataStatus?:Boolean;
  constructor(private homePageService:HomePageService,
    private activeRoute: ActivatedRoute,
    private router:Router,
    private navbarService:NavbarService,
    public app:AppModule) { }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    window.scroll({
      top : 0
    });
    this.activeRoute.paramMap.subscribe(data =>{
      this.app.home=false;
      this.tumanMessages=[];
      this.dataStatus=false;
      this.h1=true;
      this.load=true;
      this.pageNumber=0;
      this.id = data.get("id");
      this.nom = data.get("nom");
      this.homePageService.getFilterTuman(this.id,this.pageNumber).subscribe(data => {
        this.h1=false;
        if(data.totalElements == 0 || data.totalElements == null){
          this.dataStatus = true;
        }
        this.tumanMessages = data.content;
        setTimeout(() => {
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
        }, 2000);
        this.load=false;
      });
    });
  }
  koproq(){
    this.pageNumber =  this.pageNumber + 1;
    this.homePageService.getFilterTuman(this.id,this.pageNumber).subscribe(data => {
      this.tumanMessages = this.tumanMessages.concat(data.content);
    });
  }
  openMessage(id:any){
    this.router.navigate([this.app.post, id]);
  }
  rekOpen(url:any){
    location.href=url;
  }
}
