import { AfterViewInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AppModule } from '../app.module';
import { Tuman } from '../model/tuman';
import { Types } from '../model/types';
import { NavbarService } from '../navbar/navbar.service';
import { CurrentService } from './sidenav.service';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit{

  @Output() sideNavOpen2: EventEmitter<boolean> = new EventEmitter(true);
  types:Types[] = [];
  tumans:Tuman[] = [];
  currency?:any=[];
  constructor(private navbarService:NavbarService,
    private router: Router,
    private currencyService:CurrentService,
    public app:AppModule) { }
  ngAfterViewInit(): void {
    this.currencyService.getAllCurrency().subscribe(data =>{
      this.currency = data;
    })
  }
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
