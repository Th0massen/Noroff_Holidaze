import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  @Input() hotelData: {};

  onSearchItemClick(){
    let hotelId = (this.hotelData['id']);
    this.router.navigate(['/hotels_page/hotel'], {queryParams: {id: hotelId} })
  }

}
