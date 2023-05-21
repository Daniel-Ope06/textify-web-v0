import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './components/home-page/home-page.component';
import { BirthdayGiftComponent } from './components/birthday-gift/birthday-gift.component';

const routes: Routes = [
  {path:'home', title: 'Textify', component: HomePageComponent},
  {path:'emmanuella', title: 'Birthday - Textify', component: BirthdayGiftComponent},
  {path:'', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
