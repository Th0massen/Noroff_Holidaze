import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as HotelData from 'src/establishments.json';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentsService {

  constructor() {}

  // sends requested data to components requesting it.
  getHotels(){
    return of(HotelData);
  }

}
