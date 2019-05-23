import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  @Input() hotelDetails: {};

  constructor() { }

  ngOnInit() {
  }
}
