import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Tuman } from '../model/tuman';
import { Types } from '../model/types';
import { NavbarService } from '../navbar/navbar.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() sideNavOpen2: EventEmitter<boolean> = new EventEmitter(true);
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
    this.router.navigate(['type', id])
  }
  openTuman(id: any){
    this.router.navigate(['tuman', id])
  }  
}
