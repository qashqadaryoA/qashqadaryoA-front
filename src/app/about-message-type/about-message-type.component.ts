import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePageService } from '../home/home.service';

@Component({
  selector: 'app-about-message-type',
  templateUrl: './about-message-type.component.html',
  styleUrls: ['./about-message-type.component.scss']
})
export class AboutMessageTypeComponent implements OnInit,AfterViewInit {
  @Input("hashtags") hashtags!: any;
  hashtagMessages:any=[];
  pageNumber: number = 1;
  constructor(private homePageService: HomePageService,private router: Router) { }
  ngAfterViewInit(): void {
    this.koproq();
  }
  ngOnInit(): void {

  }
  openMessage(id: any) {
    this.router.navigate(['message', id]);
  }

  koproq() {
    if(this.hashtags!=null){
      if (this.hashtags.length == 4) {
        this.homePageService.getFilterHashtags(this.hashtags[0].hashtag, this.hashtags[1].hashtag, this.hashtags[2].hashtag, this.hashtags[3].hashtag, this.pageNumber).subscribe(data => {
          this.hashtagMessages = this.hashtagMessages.concat(data.content);
        });
      }
      if (this.hashtags.length == 3) {
        this.homePageService.getFilterHashtags(this.hashtags[0].hashtag, this.hashtags[1].hashtag, this.hashtags[2].hashtag,null, this.pageNumber).subscribe(data => {
          this.hashtagMessages = this.hashtagMessages.concat(data.content);
        });
      }
      if (this.hashtags.length == 2) {
        this.homePageService.getFilterHashtags(this.hashtags[0].hashtag, this.hashtags[1].hashtag,null,null, this.pageNumber).subscribe(data => {
          this.hashtagMessages = this.hashtagMessages.concat(data.content);
        });
      }
      if (this.hashtags.length == 1) {
        this.homePageService.getFilterHashtags(this.hashtags[0].hashtag,null,null,null,this.pageNumber).subscribe(data => {
          this.hashtagMessages = this.hashtagMessages.concat(data.content);
        });
      }
      this.pageNumber=this.pageNumber+1;
    }
    
  }

}
