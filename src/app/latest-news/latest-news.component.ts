import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-latest-news',
  templateUrl: './latest-news.component.html',
  styleUrls: ['./latest-news.component.scss']
})
export class LatestNewsComponent implements OnInit,AfterViewInit {
  latestNewsMessages:Message[] = [];
  constructor(private homePageService:HomePageService) { }
  ngAfterViewInit(): void {
    this.homePageService.getLatestNews().subscribe(data => {
      this.latestNewsMessages = data.content;
    });
  }

  ngOnInit(): void {
  }

}
