import { Injectable } from '@angular/core';
import { MOCK_ACCOUNT } from '../mock/account.mock';
import { AccountModel } from '../models/account.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private router: Router ) { 
    this.account = MOCK_ACCOUNT;
  }

  account = {} as AccountModel;

  startSession(){
    window.localStorage.setItem('isSignedIn', 'true');
    this.router.navigate(['admin']);
  }

  login(username:string, password:string){
    return this.account.username == username && this.account.password == password;
  }

}
