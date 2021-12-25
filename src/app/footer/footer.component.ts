import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(public app:AppModule) { }

  ngOnInit(): void {
  }

} 
