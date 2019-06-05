import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  @Input() hotelDetails: {};
  @Input() id: {};
  @Output() hideForm = new EventEmitter;
  cancel:boolean = true;

  enquiryForm: FormGroup;

  constructor(  ) { 
    // Set up form group
    this.enquiryForm = new FormGroup({
      'hotelName': new FormControl ('', [
      ]),
      'fullName': new FormControl('', [
        Validators.required
      ]),
      'email': new FormControl('', [
        Validators.required,
        Validators.email
      ]),
      'date_in': new FormControl('', [
        Validators.required
      ]),
      'date_out': new FormControl('', [
        Validators.required
      ])
    });
  }

  ngOnInit() {
  }

  // Error variables
  nameError:boolean = false;
  emailError:boolean = false;
  checkInError:boolean = false;
  checkOutError:boolean= false;

  validateForm(){
    let fullName = this.enquiryForm.controls.fullName.status;
    let email = this.enquiryForm.controls.email.status;
    let checkIn = this.enquiryForm.controls.date_in.status;
    let checkOut = this.enquiryForm.controls.date_out.status;
    // Check form status and return errors
    if( this.enquiryForm.status === 'INVALID' ){
      switch( fullName ){
        case 'INVALID':
          this.nameError = true;
          document.getElementById('clientName').style.borderLeft = '5px solid red';
        break;
        default:
          this.nameError = false;
          document.getElementById('clientName').style.borderLeft = "5px solid green"; 
        break;
      }
      switch( email ){
        case 'INVALID':
          this.emailError = true;
          document.getElementById('email').style.borderLeft = '5px solid red';
          break;
        default:
          this.emailError = false;
          document.getElementById('email').style.borderLeft = '5px solid green';
          break;
      }
      switch( checkIn ){
        case 'INVALID':
          this.checkInError = true;
          document.getElementById('checkin').style.borderLeft = '5px solid red';
          break;
        default:
          this.checkInError = false;
          document.getElementById('checkin').style.borderLeft = '5px solid green';
          break;
      }
      switch( checkOut ){
        case 'INVALID':
          this.checkOutError = true;
          document.getElementById('checkout').style.borderLeft = '5px solid red';
          break;
        default:
          this.checkOutError = false;
          document.getElementById('checkout').style.borderLeft = '5px solid green';
          break;
      }
    }
    // Submits the form & sets localstorage for confirmation message.
    else{
      console.log('Sending Form');
      localStorage.setItem('enquiryStatus', 'SENT');
      document.forms['enquiryForm'].submit();
    }
  }

  cancelForm(){
    this.hideForm.emit();
  }
}
