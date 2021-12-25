import { Component, OnInit } from '@angular/core';
import { AppModule } from '../app.module';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent implements OnInit {

  constructor(public app:AppModule) { }

  ngOnInit(): void {
  }

}
