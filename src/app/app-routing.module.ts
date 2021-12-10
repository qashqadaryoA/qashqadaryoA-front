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
    path: 'type/:id',
    component: TypePageComponent
  },
  {
    path: 'tuman/:id',
    component: TumanPageComponent
  },
  { path: 'message/:id', component: AboutMessageComponent},
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
