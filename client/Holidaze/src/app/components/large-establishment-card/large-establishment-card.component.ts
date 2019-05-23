import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-large-establishment-card',
  templateUrl: './large-establishment-card.component.html',
  styleUrls: ['./large-establishment-card.component.scss']
})
export class LargeEstablishmentCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.findId();  
  }

  specificId:any;
  @Input() establishments: {};

  findId(){
    this.specificId = this.establishments;
  }

}
