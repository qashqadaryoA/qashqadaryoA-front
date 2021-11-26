import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './share/material.model';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NavbarBottomComponent } from './navbar-bottom/navbar-bottom.component';
import { HomePageTwoComponent } from './home-page-two/home-page-two.component';
import { HomePageThreeComponent } from './home-page-three/home-page-three.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchComponent,
    HomeComponent,
    SidenavComponent,
    FooterComponent,
    NavbarBottomComponent,
    HomePageTwoComponent,
    HomePageThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule 

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
