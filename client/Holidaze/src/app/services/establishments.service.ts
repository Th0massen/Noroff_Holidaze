import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as HotelData from 'src/establishments.json';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentsService {

  constructor() {}

  getHotels(){
    return of(HotelData);
    //return this.http.get(this.establishments)
  }

}
