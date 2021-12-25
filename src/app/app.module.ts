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
import { TypePageComponent } from './type-page/type-page.component';
import { SocialMediaComponent } from './social-media/social-media.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ImageDownloadComponent } from './image-download/image-download.component';
import { AboutMessageComponent } from './about-message/about-message.component';
import { AboutMessageRelatedToTheSubjectComponent } from './about-message-related-to-the-subject/about-message-related-to-the-subject.component';
import { AboutMessageTypeComponent } from './about-message-type/about-message-type.component';
import { TumanPageComponent } from './tuman-page/tuman-page.component';
import { YoutubePipe } from './youtube.pipe';
import { UrlFilterPipe } from './url-filter.pipe';
import { TranslatePipe } from './translate.pipe';
import { UrlFilterLotinPipe } from './url-filter-lotin.pipe';
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
    TypePageComponent,
    SocialMediaComponent,
    ImageDownloadComponent,
    AboutMessageComponent,
    AboutMessageRelatedToTheSubjectComponent,
    AboutMessageTypeComponent,
    TumanPageComponent,
    YoutubePipe,
    UrlFilterPipe,
    TranslatePipe,
    UrlFilterLotinPipe,
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
export class AppModule { 
  public lotin=false;  
  storeKirill(): any {
    sessionStorage.setItem("language", "Ўзбекча");
    this.getUrl();
  }
  storeLotin(): any {
    sessionStorage.setItem("language", "Lotincha");
    this.getUrl();
  }
  getUrl(): string | null {
    if(sessionStorage.getItem("language")==null){
      return this.storeKirill();
    }
    else{
      if(sessionStorage.getItem("language")=="Lotincha"){
        this.lotin=true;
      }
      else{
        this.lotin=false;
      }
      return sessionStorage.getItem("language") as string | null;
    }
  }
  clearUrl(): void {
    sessionStorage.removeItem("language");
  }  
}
