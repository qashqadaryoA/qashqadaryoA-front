import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Qashqadaryo-Ahli';
  constructor(private appModule:AppModule, private router: Router){
    router.events.subscribe((val) => {
      // see also 
     if(val instanceof NavigationEnd) {
       console.log("o'zgarid");
       
      window.scrollTo(0, 0);
     }
  });
    this.appModule.getUrl();
  }
}
