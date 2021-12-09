import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';

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
  constructor(private homePageService:HomePageService,private activeRoute: ActivatedRoute,private router:Router) { }
  ngAfterViewInit(): void {
    
  }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(data =>{
      this.id = data.get("id");
    });
    this.homePageService.getById(this.id).subscribe(data => {
      let message = data;
      let baza: any[] = [];
      for(let j=0;j<message.hashtags.length;j++){
        let hashtags!:JSON;
        hashtags=JSON.parse('{"hashtag":'+'"'+message.hashtags[j]+'"'+'}');
        baza = baza.concat(hashtags);
        this.message = message;
      }
      this.hashtags = baza;
    });
  }
  openMessage(id: any){
    this.router.navigate(['message', id]);
  }  
}
