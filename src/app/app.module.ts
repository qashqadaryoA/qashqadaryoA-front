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
import { MostViewComponent } from './most-view/most-view.component';
import { LatestNewsComponent } from './latest-news/latest-news.component';
import { HomeNewComponent } from './home-new/home-new.component';
import { TypePageComponent } from './type-page/type-page.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ImageDownloadComponent } from './image-download/image-download.component';
import { AboutMessageComponent } from './about-message/about-message.component';
import { AboutMessageRelatedToTheSubjectComponent } from './about-message-related-to-the-subject/about-message-related-to-the-subject.component';
import { AboutMessageTypeComponent } from './about-message-type/about-message-type.component';
import { TumanPageComponent } from './tuman-page/tuman-page.component';


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
    HomePageThreeComponent,
    MostViewComponent,
    LatestNewsComponent,
    HomeNewComponent,
    TypePageComponent,
    SocialMediaComponent,
    ImageDownloadComponent,
    AboutMessageComponent,
    AboutMessageRelatedToTheSubjectComponent,
    AboutMessageTypeComponent,
    TumanPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
