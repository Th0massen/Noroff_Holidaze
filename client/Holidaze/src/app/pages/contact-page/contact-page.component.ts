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

  clientName:string;
  clientEmail:string;
  clientMsg:string;

  constructor() {
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
  }

  onSubmit(){
    let nameStatus = this.contactForm.controls.clientName.status;
    let emailStatus = this.contactForm.controls.clientEmail.status;
    let msgStatus = this.contactForm.controls.clientMessage.status;
    if( this.contactForm.status === 'INVALID' ){
      switch( nameStatus ){
        case 'INVALID':
          this.clientNameError = true; 
          break;
        default:
          this.clientNameError = false;
      }
      switch( emailStatus ){
        case 'INVALID':
          this.clientEmailError = true;
          break;
        default: 
          this.clientEmailError = false;
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
      this.clientName = this.contactForm.controls.clientName.value;
      this.clientEmail = this.contactForm.controls.clientEmail.value;
      this.clientMsg = this.contactForm.controls.clientMessage.value;
      this.sendContactData();
    }
  }

  sendContactData(){
  let form = (<HTMLInputElement>document.getElementById('contactForm'))
  form.submit();
  /*
    let data = { 
      clientName: this.clientName, 
      email: this.clientEmail, 
      message: this.clientMsg 
    };
    let jsonData = JSON.stringify(data);
    console.log('sending Data', jsonData);
    let http = new XMLHttpRequest();
    let url = 'http://localhost/noroff_exam/server/contact-success.php';
    http.open('Post', url, true );
    http.send(jsonData);*/ 
  }
}
