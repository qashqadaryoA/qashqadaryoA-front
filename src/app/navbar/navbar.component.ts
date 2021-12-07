import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Types } from '../model/types';
import { NavbarService } from './navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Output() sideNavOpen: EventEmitter<boolean> = new EventEmitter(true);
  siteBrand = environment.siteBrand;
  siteName = environment.siteName;
  types:Types[] = [];
  constructor(private navbarService:NavbarService,
    private router: Router) { }
  ngOnInit(): void {
    this.navbarService.getAllStatus().subscribe(data => {
      this.types = data;
    });
  }
  openType(id: any){
    this.router.navigate(['type', id])
  }

}
