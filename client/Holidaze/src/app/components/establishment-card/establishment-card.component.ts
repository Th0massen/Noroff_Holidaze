import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-establishment-card',
  templateUrl: './establishment-card.component.html',
  styleUrls: ['./establishment-card.component.scss']
})
export class EstablishmentCardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() establishments: {};

}
