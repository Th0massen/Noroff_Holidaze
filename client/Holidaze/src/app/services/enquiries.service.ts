import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as Enquiries from '../../enquiries.json';

@Injectable({
  providedIn: 'root'
})
export class EnquiriesService {

  constructor() { }

  getEnquiries(){
    return of(Enquiries);
  }
}
