import { Location } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, NavigationStart, Router } from '@angular/router';
import { AppModule } from '../app.module';
import { HomePageService } from '../home/home.service';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-about-message',
  templateUrl: './about-message.component.html',
  styleUrls: ['./about-message.component.scss']
})
export class AboutMessageComponent implements OnInit {
  id?: any;
  message!: any;
  hashtags: any;
  status: boolean = false;
  reklama1: any;
  reklama2: any;
  malumot: any;
  txt: string = "";
  load?: Boolean;
  aboutstatus?: Boolean;
  @ViewChild('div1') div1!: ElementRef;
  lastPoppedUrl: string | undefined;
  yScrollStack: any[] = [];
  h1?:Boolean;
  h1Text?:String="Юкланмоқда...";
  constructor(private homePageService: HomePageService,
    private activeRoute: ActivatedRoute,
    private router: Router,
    private navbarService: NavbarService,
    public appModule: AppModule,
    private location: Location) { }
  ngAfterViewInit(): void {
    window.scroll(0, 0);
    this.scrool();
  }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(data => {
      this.appModule.home=false;
      this.aboutstatus=false;
      this.load = true;
      this.malumot = "";
      this.hashtags = null;
      this.id = data.get("id");
      this.message = [];
      this.homePageService.getById(this.id).subscribe(data => {
        let message = data;
        this.txt = "";
        this.txt = message?.fullText?.fullText?.replaceAll('<img', '<img height="100%" width="100%"');
        this.malumot = this.txt;
        let baza: any[] = [];
        for (let j = 0; j < message.hashtags.length; j++) {
          let hashtags!: JSON;
          hashtags = JSON.parse('{"hashtag":' + '"' + message.hashtags[j] + '"' + '}');
          baza = baza.concat(hashtags);
          this.message = message;
        }
        this.hashtags = baza;
        this.load = false;
        window.scroll(0, 0);
        this.aboutstatus=true;
        setTimeout(() => {
          this.navbarService.getAllAdversitement().subscribe(data => {
            if (data.length > 0) {
              if (data.length == 2) {
                this.reklama1 = data[0];
                this.reklama2 = data[1];
              }
              else {
                if (data[0].daraja == 1) {
                  this.reklama1 = data[0];
                }
                else {
                  this.reklama2 = data[0];
                }
              }
            }
          });  
        }, 2000);
      });
    });
  }
  rekOpen(url: any) {
    location.href = url;
  }
  scrool() {
    this.location.subscribe((ev: any) => {
      this.lastPoppedUrl = ev.url;
    });
    this.router.events.subscribe((ev: any) => {
      if (ev instanceof NavigationStart) {
        if (ev.url != this.lastPoppedUrl)
          this.yScrollStack.push(window.scrollY);
      } else if (ev instanceof NavigationEnd) {
        if (ev.url == this.lastPoppedUrl) {
          this.lastPoppedUrl = undefined;
          window.scrollTo(0, this.yScrollStack.pop());
        } else
          window.scrollTo(0, 0);
      }
    });
  }
}
