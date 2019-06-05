import { Component, OnInit } from '@angular/core';
import { EstablishmentsService } from 'src/app/services/establishments.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotels-page',
  templateUrl: './hotels-page.component.html',
  styleUrls: ['./hotels-page.component.scss']
})
export class HotelsPageComponent implements OnInit {

  constructor( 
    private hotels: EstablishmentsService,
    private url: ActivatedRoute  
  ) { }

  ngOnInit() {
    if( localStorage.getItem('enquiryStatus') === 'SENT' ){
      this.confirmOrder = true;
    }
    this.RequestData();
    this.urlKey();
  }

  confirmOrder:boolean = false;
  logo:string = "../../../assets/logo.svg";
  searchKey:string;
  searchTerm:any = [];
  establishments:any = [];
  filteredResults:any = [];

  // Retrieve hotel data
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

  urlKey(){
    this.url.queryParams.subscribe( url => {
      let key = url['key'];
      if( key !== undefined ){
        console.log(key);
        this.searchKey = key;
        (<HTMLInputElement>document.getElementById('searchbar')).value = this.searchKey;
        this.onSearch();
      }
    });
  }


  // filter and display results matching provided search criteria
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
