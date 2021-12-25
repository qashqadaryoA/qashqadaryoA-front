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
  constructor(
    public homePageService: HomePageService,
    private router:Router, 
    private navbarService:NavbarService,
    public app:AppModule
  ) {

  }

  ngOnInit(): void {
    window.scroll({
      top : 0
    });
    this.homePageService.getAll().subscribe(data => {
      this.homePageMessages = data;
      this.homePageMessageLevel10 = [this.homePageMessages[0]];
      this.homePageMessageLevel9 = [this.homePageMessages[1],this.homePageMessages[2],this.homePageMessages[3],
      this.homePageMessages[4],this.homePageMessages[5],this.homePageMessages[6]];
      this.homePageMessageLevel8 = [this.homePageMessages[7],this.homePageMessages[8],this.homePageMessages[9],
      this.homePageMessages[10],this.homePageMessages[11],this.homePageMessages[12]];
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
  }
  openMessage(id:any,caption:any){
    this.router.navigate(["post",id,caption]);
  }
  ngAfterViewInit(): void {    
  }  
  rekOpen(url:any){
    location.href=url;
  }
}
