import { Component, OnInit } from '@angular/core';
import { HomePageTwoService } from './home-page-two.service';

@Component({
  selector: 'app-home-page-two',
  templateUrl: './home-page-two.component.html',
  styleUrls: ['./home-page-two.component.scss']
})
export class HomePageTwoComponent implements OnInit {
  youtubeLinks!:any;
  lo:any="https://www.youtube.com/embed/zcAalMeaKso";
  constructor(private homePageTwoService:HomePageTwoService) { }
  ngAfterViewInit(): void {
    this.homePageTwoService.getAll().subscribe(data => {
      this.youtubeLinks = data.content;
    });  
  }
  ngOnInit(): void {
      
  }
}
