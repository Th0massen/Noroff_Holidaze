import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import * as Messages from 'src/contact.json';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }

  getMessages(){
    return of(Messages);
  }

}
