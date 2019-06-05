import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  contactForm: FormGroup;
  clientNameError:boolean = false;
  clientEmailError:boolean = false;
  clientMsgError:boolean = false;

  confirmSentForm:boolean = false;

  constructor() {
    // Setup formgroup
    this.contactForm = new FormGroup({
      'clientName': new FormControl('', [ 
        Validators.required 
      ]),
      'clientEmail': new FormControl('', [ 
        Validators.required,
        Validators.email
      ]),
      'clientMessage': new FormControl('', [
        Validators.required ,
        Validators.minLength(10)
      ])
    });
  }

  ngOnInit() {
    if( localStorage.getItem('contactForm') === 'SENT' ){
      this.confirmSentForm = true;
      console.log('contact form sent, pop up added soon');
    }
  }

  onSubmit(){
    let nameStatus = this.contactForm.controls.clientName.status;
    let emailStatus = this.contactForm.controls.clientEmail.status;
    let msgStatus = this.contactForm.controls.clientMessage.status;
    // Check form status and return matching error
    if( this.contactForm.status === 'INVALID' ){
      switch( nameStatus ){
        case 'INVALID':
          this.clientNameError = true; 
          document.getElementById('clientName').style.borderLeft = '5px solid red';
          break;
        default:
          this.clientNameError = false;
          document.getElementById('clientName').style.borderLeft = '5px solid green';
      }
      switch( emailStatus ){
        case 'INVALID':
          this.clientEmailError = true;
          document.getElementById('email').style.borderLeft = '5px solid red';
          break;
        default: 
          this.clientEmailError = false;
          document.getElementById('email').style.borderLeft = '5px solid green';
      }
      switch( msgStatus ){
        case 'INVALID':
          this.clientMsgError = true;
          break;
        default:
          this.clientMsgError = false; 
      }
    } 
    else{
      localStorage.setItem('contactForm', 'SENT');
      document.forms['contactForm'].submit();
    }
  }

}
