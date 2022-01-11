import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit,AfterViewInit {
  latestNewsMessages:Message[] = [];
  constructor(private homePageService:HomePageService,
    private router:Router,
    public app:AppModule) { }
  ngAfterViewInit(): void {
    
  }

  ngOnInit(): void {
    this.homePageService.getLatestNews(0).subscribe(data => {
      this.latestNewsMessages = data.content;
    });
  }
  openMessage(id:any,caption:any){
    this.router.navigate([this.app.post, id, caption]);
    this.app.postChange(); 
  }
}
