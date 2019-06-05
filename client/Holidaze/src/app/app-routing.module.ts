import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { HotelsPageComponent } from './pages/hotels-page/hotels-page.component';
import { SpecificHotelComponent } from './pages/specific-hotel/specific-hotel.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SigninPageComponent } from './pages/signin-page/signin-page.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'hotels_page', component: HotelsPageComponent },
  { path: 'hotels_page/hotel', component: SpecificHotelComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'login', component: SigninPageComponent },
  { path: 'admin', component: AdminPageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
