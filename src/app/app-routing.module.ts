import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StartPageComponent} from "./components/start-page/start-page.component";
import {ContentPageComponent} from "./components/content-page/content-page.component";

const routes: Routes = [
  {path: '', component: StartPageComponent},
  {path: 'search/:searchTerm', component: ContentPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
