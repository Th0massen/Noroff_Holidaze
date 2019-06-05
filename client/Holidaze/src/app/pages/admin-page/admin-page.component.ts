import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MessagesService } from 'src/app/services/messages.service';
import { EnquiriesService } from 'src/app/services/enquiries.service';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.scss']
})
export class AdminPageComponent implements OnInit {

  constructor( 
    private router: Router,
    private enquiries: EnquiriesService,
    private messages: MessagesService
  ) { }

  viewSection:string;
  listOfEnquiries:any = [];
  listOfMessages:any = [];
  newHotelAdded:boolean = false;

  ngOnInit() {
    if( localStorage.getItem('isSignedIn') !== 'true' ){
      this.router.navigate(['login']);
    } 
    else if( localStorage.getItem('newHotel') === 'success'){
      this.newHotelAdded = true;
    }
  }

  onEnquiriesClick(){
    if( this.listOfEnquiries.length < 1 ){
      this.getEnquiriesList();
    }
    this.viewSection = 'enquiries';
  }

  onMessageClick(){
    if( this.listOfMessages < 1 ){
      this.getMessagesList();
    }
    this.viewSection = 'messages';
  }

  onAddClick(){
    this.viewSection = 'addHotel';
  }

  getEnquiriesList(){
    this.enquiries.getEnquiries().subscribe( (response:any) => {
      this.listOfEnquiries = response.default;
    })
  }

  getMessagesList(){
    this.messages.getMessages().subscribe( (response:any) => {
      this.listOfMessages = response.default;
    })
  }

}
