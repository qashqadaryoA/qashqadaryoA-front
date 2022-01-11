import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMessageComponent } from './about-message/about-message.component';
import { HomeComponent } from './home/home.component';
import { SearchFindComponent } from './search-find/search-find.component';
import { SearchComponent } from './search/search.component';
import { TumanPageComponent } from './tuman-page/tuman-page.component';
import { TypePageComponent } from './type-page/type-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find', component: SearchFindComponent },
  { path: 'find/:nom', component: SearchFindComponent },
  {
    path: 'type/:id/:nom',
    component: TypePageComponent
  },
  {
    path: 'tuman/:id/:nom',
    component: TumanPageComponent
  },
  { path: 'post/:id', 
  component: AboutMessageComponent},
  { path: ':id', 
  component: AboutMessageComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
