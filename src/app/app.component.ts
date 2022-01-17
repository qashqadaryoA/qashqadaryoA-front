import { Component, ElementRef, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  
  @Output() sideNavOpen: EventEmitter<boolean> = new EventEmitter(true);
  title = 'Qashqadaryo-Ahli';
  @ViewChild("topScrollAnchor") topScroll?:ElementRef;
  constructor(private appModule:AppModule, private router: Router,public activeRoute:ActivatedRoute){
  }
  onNavigate(event:any){
  }
  @HostListener('window:popstate', ['$event'])
  onPopState(event: any) {
    this.sideNavOpen.emit(false);
    console.log("dfgdfgd");
  }
  
}
