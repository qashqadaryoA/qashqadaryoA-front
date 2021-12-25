import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AppModule } from '../app.module';
import { HomePageTwoService } from './home-page-two.service';

@Component({
  selector: 'app-home-page-two',
  templateUrl: './home-page-two.component.html',
  styleUrls: ['./home-page-two.component.scss']
})
export class HomePageTwoComponent implements OnInit {
  youtubeLinks:any;
  constructor(private homePageTwoService:HomePageTwoService,
    public app:AppModule) { }
  ngAfterViewInit(): void {
    this.homePageTwoService.getAll().subscribe(data => {
      this.youtubeLinks = data.content;
    });  
  }
  ngOnInit(): void {
      
  }
}
