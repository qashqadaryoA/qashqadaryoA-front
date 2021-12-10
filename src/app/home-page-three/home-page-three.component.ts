import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-home-page-three',
  templateUrl: './home-page-three.component.html',
  styleUrls: ['./home-page-three.component.scss']
})
export class HomePageThreeComponent implements OnInit ,AfterViewInit{
  @Input("HomePageMessageLevel8") homePageMessageLevel8!: Message[];
  pageNumber:number=0;
  constructor(private homePageService:HomePageService,private router:Router) { }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }

  koproq(){
    this.pageNumber =  this.pageNumber + 1;
    this.homePageService.getLatestNews(this.pageNumber).subscribe(data => {
      this.homePageMessageLevel8 = this.homePageMessageLevel8.concat(data.content);
    });    
  }
  openMessage(id: any){
    this.router.navigate(['message', id]);
  }  
}
