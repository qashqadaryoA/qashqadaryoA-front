import { AfterViewInit, Component, OnInit } from '@angular/core';
import { HomePageService } from '../home/home.service';
import { Message } from '../model/message';

@Component({
  selector: 'app-most-view',
  templateUrl: './most-view.component.html',
  styleUrls: ['./most-view.component.scss']
})
export class MostViewComponent implements OnInit,AfterViewInit {
  viewMessages:Message[] = [];
  constructor(private homePageService:HomePageService) { }
  ngAfterViewInit(): void {
    this.homePageService.getSortView().subscribe(data => {
      this.viewMessages = data.content;
    });
  }

  ngOnInit(): void {
  }


}
