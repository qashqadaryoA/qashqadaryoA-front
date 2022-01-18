import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AppModule } from '../app.module';
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
  @Output() sideNavOpen3: EventEmitter<boolean> = new EventEmitter(true);
  siteBrand = environment.siteBrand;
  siteName = environment.siteName;
  selectValue: any;
  types: Types[] = [];
  tumans: Tuman[] = [];
  @ViewChild('select') select!: ElementRef;
  constructor(private navbarService: NavbarService,
    public app: AppModule,
    private activeRoute: ActivatedRoute,) { }
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe(data => {
      this.sidenavchange();
    });
    if (this.app.lotin) {
      this.selectValue = "Lotincha";
    }
    else {
      this.selectValue = "Ўзбекча";
    }
    this.navbarService.getAllTypeStatus().subscribe(data => {
      this.types = data;
    });
    this.navbarService.getAllTumanStatus().subscribe(data => {
      this.tumans = data;
    });
  }
  til() {
    if (this.select.nativeElement.value == "Lotincha") {
      this.app.storeLotin();
    }
    else {
      this.app.storeKirill();
    }
  }
  back(){
    console.log("keldi");
  }
  sidenav1(){
    if(this.app.sidenav1Status==true){
      this.app.sidenav1Status=false;
    }
    else{
      this.app.sidenav1Status=true;
    }    
  }
  sidenav2(){
    if(this.app.sidenav2Status==true){
      this.app.sidenav2Status=false;
    }
    else{
      this.app.sidenav2Status=true;
    }    
  }
  sidenavchange(){
    if(this.app.sidenav1Status==true){
      this.app.sidenav1Status=false;
      this.sideNavOpen.emit(false);
    }
    if(this.app.sidenav2Status==true){
      this.app.sidenav2Status=false;
      this.sideNavOpen3.emit(false);
    }
  }
}
