import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [
  {path: "", component: HomepageComponent},
  {path: "users/:userIndex/images", component: ImagesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
