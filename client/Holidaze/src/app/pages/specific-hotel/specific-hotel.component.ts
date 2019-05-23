import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EstablishmentsService } from 'src/app/services/establishments.service';

@Component({
  selector: 'app-specific-hotel',
  templateUrl: './specific-hotel.component.html',
  styleUrls: ['./specific-hotel.component.scss']
})
export class SpecificHotelComponent implements OnInit {

  constructor( 
      private url: ActivatedRoute,
      private establishment: EstablishmentsService
    ) {}

  ngOnInit() {
    this.fetchUrlParameters();
  }

  urlParam:any;
  hotelData:any = [];

  hotelName:string;
  hotelDescription:string;
  hotelMail:string;
  hotelMaxGuests:string;
  hotelPrice:string;


  fetchUrlParameters(){
    this.url.queryParams.subscribe( url => {
      this.urlParam = url['id'];
    });
    this.fetchHotelData();
  }

  fetchHotelData(){
    console.log(this.urlParam)
    if( this.hotelData.length < 1 ){
      this.establishment.getHotels().subscribe( (response) => {
        let retrievedData = response['default'];
        this.hotelData.push(retrievedData[ this.urlParam - 1 ]);
        console.log(this.hotelData)
      }) 
    }
    this.hotelName = this.hotelData[0].establishmentName;
    this.hotelDescription = this.hotelData[0].description;
    this.hotelMail = this.hotelData[0].establishmentEmail;
    this.hotelMaxGuests = this.hotelData[0].maxGuests;
    this.hotelPrice = this.hotelData[0].price;
  }

  onOrderClick(){
    console.log('Feature unavailable for the moment');
  }

}
