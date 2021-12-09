import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-about-message-related-to-the-subject',
  templateUrl: './about-message-related-to-the-subject.component.html',
  styleUrls: ['./about-message-related-to-the-subject.component.scss']
})
export class AboutMessageRelatedToTheSubjectComponent implements OnInit,AfterViewInit {
  @Input("hashtags") hashtags!: any;
  titleMessages: Message[] = [];
  constructor(private homePageService:HomePageService,private activeRoute: ActivatedRoute,private router:Router) { }
  ngAfterViewInit(): void {
    if (this.hashtags.length == 4) {
      this.homePageService.getFilterHashtags(this.hashtags[0].hashtag, this.hashtags[1].hashtag, this.hashtags[2].hashtag, this.hashtags[3].hashtag, 0).subscribe(data => {
        this.titleMessages = data.content;
      });
    }
    if (this.hashtags.length == 3) {
      this.homePageService.getFilterHashtags(this.hashtags[0].hashtag, this.hashtags[1].hashtag, this.hashtags[2].hashtag,null, 0).subscribe(data => {
        this.titleMessages = data.content;
      });
    }
    if (this.hashtags.length == 2) {
      this.homePageService.getFilterHashtags(this.hashtags[0].hashtag, this.hashtags[1].hashtag,null,null, 0).subscribe(data => {
        this.titleMessages = data.content;
      });
    }
    if (this.hashtags.length == 1) {
      this.homePageService.getFilterHashtags(this.hashtags[0].hashtag,null,null,null,0).subscribe(data => {
        this.titleMessages = data.content;
      });
    }
  }
  ngOnInit(): void {

  }
  openMessage(id: any) {
    this.router.navigate(['message', id]);
  }

}
