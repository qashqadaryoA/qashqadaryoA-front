import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit,AfterViewInit {
  latestNewsMessages:Message[] = [];
  constructor(private homePageService:HomePageService,private router:Router) { }
  ngAfterViewInit(): void {
    this.homePageService.getLatestNews(0).subscribe(data => {
      this.latestNewsMessages = data.content;
    });
  }

  ngOnInit(): void {
  }

  openMessage(id: any){
    this.router.navigate(['message', id]);
  }  
}
