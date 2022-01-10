import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutMessageComponent } from './about-message/about-message.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TumanPageComponent } from './tuman-page/tuman-page.component';
import { TypePageComponent } from './type-page/type-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find', component: SearchComponent },
  {
    path: 'type/:id/:nom',
    component: TypePageComponent
  },
  {
    path: 'tuman/:id/:nom',
    component: TumanPageComponent
  },
  { path: 'post/:id/:nom', 
  component: AboutMessageComponent},
  { path: 'newpost/:id/:nom', 
  component: AboutMessageComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
