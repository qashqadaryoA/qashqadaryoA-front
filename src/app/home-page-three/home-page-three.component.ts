import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { Message } from '../model/message';

@Component({
  selector: 'app-home-page-three',
  templateUrl: './home-page-three.component.html',
  styleUrls: ['./home-page-three.component.scss']
})
export class HomePageThreeComponent implements OnInit ,AfterViewInit{
  @Input("HomePageMessageLevel8") homePageMessageLevel8?: Message[];
  constructor() { }
  ngAfterViewInit(): void {
  }
  ngOnInit(): void {
  }

}
