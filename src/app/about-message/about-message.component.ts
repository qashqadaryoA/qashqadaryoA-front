import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AppModule } from '../app.module';
import { HomePageService } from '../home/home.service';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-about-message',
  templateUrl: './about-message.component.html',
  styleUrls: ['./about-message.component.scss']
})
export class AboutMessageComponent implements OnInit {
  id?:any;
  message!:any;
  hashtags:any;
  status:boolean=false;
  reklama1:any;
  reklama2:any;
  malumot:any;
  txt:string="";
  constructor(private homePageService:HomePageService,private activeRoute: ActivatedRoute,private sanitizer: DomSanitizer,
    private router:Router,
    private navbarService:NavbarService,
    public appModule:AppModule) { }
  ngAfterViewInit(): void {
    window.scroll(0,0);    
  }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(data =>{
      this.malumot="";
      this.id = data.get("id");
      this.message=[];
      this.homePageService.getById(this.id).subscribe(data => {
      let message = data;
      this.txt="";
      this.txt=message?.fullText?.fullText?.replaceAll('<img','<img height="100%" width="100%"');
      this.malumot=this.txt;
      let baza: any[] = [];
      for(let j=0;j<message.hashtags.length;j++){
        let hashtags!:JSON;
        hashtags=JSON.parse('{"hashtag":'+'"'+message.hashtags[j]+'"'+'}');
        baza = baza.concat(hashtags);
        this.message = message;
      }
      this.hashtags = baza;
    });
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
  }  
  rekOpen(url:any){
    location.href=url;
  }
  
}
