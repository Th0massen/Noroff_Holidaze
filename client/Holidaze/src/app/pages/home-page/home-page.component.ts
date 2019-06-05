import { Component, OnInit } from '@angular/core';
import { EstablishmentsService } from 'src/app/services/establishments.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {

  data:string = '';
  establishmentData:any = [];
  filteredEstablishments:any = [];

  constructor( private hotels: EstablishmentsService ) { }

  ngOnInit() {
    this.RequestData();
  }

  logo:string = "../../../assets/logo.svg"
  adImg:string = '../../assets/indexImg.jpg';
  iconStatus:string = "hotel";

  // Switch between buttons on homepage
  onHotelClick(){
    this.iconStatus = "hotel";
  }
  onRoomClick(){
    this.iconStatus = "house";
  }
  onBnbClick(){
    this.iconStatus = "bed";
  }
  
  // Get hotel data
  RequestData(){
    if( this.establishmentData.length < 1){
      this.hotels.getHotels().subscribe((response:any)=>{
        let data:any = response.default;
        this.establishmentData.push( data[2], data[4], data[6], data[8] );
        this.filteredEstablishments = [...data];
      })
    }
  }

}
