import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { Message } from '../model/message';
import { NavbarService } from '../navbar/navbar.service';
import { HomePageService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  homePageMessages:Message[] = [];
  homePageMessageLevel10: Message[] = [];
  homePageMessageLevel9: Message[] = [];
  homePageMessageLevel8: Message[] = [];
  reklama1:any;
  reklama2:any;
  load:Boolean=true;
  youtubeStatus:Boolean=false;
  h1Text:String = "Юкланмоқда...";
  h1?:Boolean;
  dataText:String = "Малумот ёқ";
  dataStatus?:Boolean=false;
  constructor(
    public homePageService: HomePageService,
    private router:Router, 
    private navbarService:NavbarService,
    public app:AppModule
  ) {

  }

  ngOnInit(): void {
    this.h1=true;
    this.app.home=true;
    window.scroll({
      top : 0
    });
    this.homePageService.getAll().subscribe(data => {
      this.h1=false;
      this.homePageMessages = data;
      if(data == []){
        this.dataStatus=true;
      }
      this.homePageMessageLevel10 = [this.homePageMessages[0]];
      this.homePageMessageLevel9 = [this.homePageMessages[1],this.homePageMessages[2],this.homePageMessages[3],
      this.homePageMessages[4],this.homePageMessages[5],this.homePageMessages[6]];
      this.homePageMessageLevel8 = [this.homePageMessages[7],this.homePageMessages[8],this.homePageMessages[9],
      this.homePageMessages[10],this.homePageMessages[11],this.homePageMessages[12]];
      this.load=false;
      setTimeout(() => {
        this.navbarService.getAllAdversitement().subscribe(data => {
          this.youtubeStatus=true;
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
    });
  }
  openMessage(id:any,caption:any){
    this.router.navigate([this.app.post, id, caption]);
    this.app.postChange(); 
  }
  ngAfterViewInit(): void {       
  }  
  rekOpen(url:any){
    location.href=url;
  }
}
