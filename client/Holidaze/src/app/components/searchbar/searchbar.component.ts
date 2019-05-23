import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() establishmentList:any;
  @Input() dropDown:boolean; 

  searchTerm:string = '';
  displayHotels:any = [];

  onSearch(){
    this.searchTerm = (<HTMLInputElement>document.getElementById('searchbar')).value
    if( this.dropDown === true ){
      const hotels = this.establishmentList.filter( hotel => {
        return hotel.establishmentName.toLowerCase().includes(this.searchTerm.trim().toLowerCase());
      })
      this.displayHotels = hotels;
    }
  }
}
