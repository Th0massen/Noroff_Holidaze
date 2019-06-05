import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logo:string = "../../../assets/logo2.svg"
  mobileNavStatus:boolean = false;

  showMobile(){
    if( this.mobileNavStatus === false ){
      this.mobileNavStatus = true;
    } else{
      this.mobileNavStatus = false;
    }
  }

  resetNav(){
    this.mobileNavStatus = false;
  }

}
