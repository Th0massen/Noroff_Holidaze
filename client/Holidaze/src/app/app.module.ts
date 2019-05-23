import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { HttpClientModule } from '@angular/common/http';
import { EstablishmentsService } from './services/establishments.service';
import { EstablishmentCardComponent } from './components/establishment-card/establishment-card.component';
import { HotelsPageComponent } from './pages/hotels-page/hotels-page.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LargeEstablishmentCardComponent } from './components/large-establishment-card/large-establishment-card.component';
import { ListItemComponent } from './components/list-item/list-item.component';
import { SpecificHotelComponent } from './pages/specific-hotel/specific-hotel.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    FooterComponent,
    HomePageComponent,
    SearchbarComponent,
    EstablishmentCardComponent,
    HotelsPageComponent,
    SidebarComponent,
    LargeEstablishmentCardComponent,
    ListItemComponent,
    SpecificHotelComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [
    EstablishmentsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
