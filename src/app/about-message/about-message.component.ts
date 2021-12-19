import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AboutMessageRelatedToTheSubjectComponent } from '../about-message-related-to-the-subject/about-message-related-to-the-subject.component';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-about-message',
  templateUrl: './about-message.component.html',
  styleUrls: ['./about-message.component.scss']
})
export class AboutMessageComponent implements OnInit {
  id?:any;
  message!:Message;
  hashtags:any;
  status:boolean=false;
  reklama1:any;
  reklama2:any;
  constructor(private homePageService:HomePageService,private activeRoute: ActivatedRoute,
    private router:Router,
    private navbarService:NavbarService) { }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    window.scroll({
      top : 0
    })
    this.activeRoute.paramMap.subscribe(data =>{
      this.id = data.get("id");
      this.homePageService.getById(this.id).subscribe(data => {
      let message = data;
      let baza: any[] = [];
      console.log(data);
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
