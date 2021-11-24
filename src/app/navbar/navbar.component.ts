import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  siteBrand = environment.siteBrand;
  siteName = environment.siteName;

  constructor() { }

  ngOnInit(): void {
  }

}
