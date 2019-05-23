import { Component, OnInit } from '@angular/core';
import { EstablishmentsService } from 'src/app/services/establishments.service';

@Component({
  selector: 'app-hotels-page',
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.scss']
})
export class HotelsPageComponent implements OnInit {

  constructor( private hotels: EstablishmentsService ) { }

  ngOnInit() {
    this.RequestData();
  }

  logo:string = "../../../assets/logo.svg";
  searchTerm:any = [];
  establishments:any = [];
  filteredResults:any = [];

  RequestData(){
    if( this.establishments.length < 1){
      this.hotels.getHotels().subscribe( (response:any) =>{
        this.establishments = response.default;
        this.filteredResults = [...response.default];
      }), error => {
        console.log(error)
      }
    }
  }

  onSearch(){
    window.scrollTo( 0, 0 );
    this.searchTerm = (<HTMLInputElement>document.getElementById('searchbar')).value;
    const hotels = this.establishments.filter( hotel => {
      switch( this.searchTerm ){
        case 'hotel':
        case 'Hotel':
          return hotel.type.toLowerCase().includes(this.searchTerm.trim().toLowerCase());
        case 'house':
        case 'House':
          return hotel.type.toLowerCase().includes(this.searchTerm.trim().toLowerCase());
        case 'bnb':
        case 'bed':
        case 'bed and breakfast':
        case 'bed & breakfast':
          return hotel.type.toLowerCase().includes(this.searchTerm.trim().toLowerCase());
        default: 
          return hotel.establishmentName.toLowerCase().includes(this.searchTerm.trim().toLowerCase());
      }
    });
    this.filteredResults = hotels;
  }
}
