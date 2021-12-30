import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Qashqadaryo-Ahli';
  @ViewChild("topScrollAnchor") topScroll?:ElementRef;
  constructor(private appModule:AppModule, private router: Router){
  }
  onNavigate(event:any){
    this.topScroll?.nativeElement.scrollIntoView({behavior:'smooth'});
  }
  scroll(){
    
  }
}
