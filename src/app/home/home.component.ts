import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../model/message';
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
  constructor(
    public homePageService: HomePageService,
    private router:Router
  ) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.homePageService.getAll().subscribe(data => {
      this.homePageMessages = data;
      this.homePageMessageLevel10 = [this.homePageMessages[0]];
      this.homePageMessageLevel9 = [this.homePageMessages[1],this.homePageMessages[2],this.homePageMessages[3],
      this.homePageMessages[4],this.homePageMessages[5],this.homePageMessages[6]];
      this.homePageMessageLevel8 = [this.homePageMessages[7],this.homePageMessages[8],this.homePageMessages[9],
      this.homePageMessages[10],this.homePageMessages[11],this.homePageMessages[12]];
    });
  }
  openMessage(id: any){
    this.router.navigate(['message', id]);
  }  
}
