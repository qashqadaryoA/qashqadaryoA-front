import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Tuman } from '../model/tuman';
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
  tumans:Tuman[] = [];
  constructor(private navbarService:NavbarService,
    private router: Router) { }
  ngOnInit(): void {
    this.navbarService.getAllTypeStatus().subscribe(data => {
      this.types = data;
    });
    this.navbarService.getAllTumanStatus().subscribe(data => {
      this.tumans = data;
    });
  }
  openType(id: any){
    this.router.navigate(['type', id]);
  }
  openTuman(id: any){
    this.router.navigate(['tuman', id])
  }

}
