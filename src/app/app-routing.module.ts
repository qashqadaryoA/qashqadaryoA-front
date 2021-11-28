import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeNewComponent } from './home-new/home-new.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find', component: SearchComponent },
  { path: 'homeNew', component: HomeNewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
