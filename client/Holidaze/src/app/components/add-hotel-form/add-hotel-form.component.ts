import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EstablishmentsService } from 'src/app/services/establishments.service';

@Component({
  selector: 'app-add-hotel-form',
  templateUrl: './add-hotel-form.component.html',
  styleUrls: ['./add-hotel-form.component.scss']
})
export class AddHotelFormComponent implements OnInit {

  newHotelForm: FormGroup;
  nameError:boolean = false;
  mailError:boolean = false;
  imageError:boolean = false;
  priceError:boolean = false;
  guestError:boolean = false;
  descError:boolean = false;
  hotelArray:any = [];
  hotelId:number;


  constructor( 
    private hotels: EstablishmentsService 
  ) {
    this.newHotelForm = new FormGroup({
      'name': new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]*[ ]?[a-zA-Z]*?$')
      ]), 
      'email': new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9]*@[a-zA-Z]*[.][a-zA-Z]{2,3}$')
      ]),
      'imageUrl': new FormControl('', [
        Validators.required,
        Validators.pattern('^(https:\/\/)(www)?.[a-zA-Z]*.[a-zA-Z]*?.(com)[\/]?[a-zA-Z0-9]*?[-=_.&?0-9a-zA-Z ]*?$')
      ]),
      'price': new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
      'guests': new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$')
      ]),
      'Lat': new FormControl('', [
        Validators.required
      ]),
      'Long': new FormControl('', [
        Validators.required
      ]),
      'description': new FormControl('', [
        Validators.required
      ])
    })
  }

  ngOnInit() {
    if( this.hotelArray.length < 1){
      this.hotels.getHotels().subscribe( (response:any) =>{
        this.hotelArray = response.default;
      })
    }
    this.hotelId = this.hotelArray.length + 1;
  }

  onSubmit(){
    if( this.newHotelForm.status === 'INVALID' ){
      console.log(this.newHotelForm);
      this.handleErrors();
    } else{
      localStorage.setItem('newHotel', 'success');
      document.forms['newHotelForm'].submit();
    }
  }

  handleErrors(){
    let form = this.newHotelForm.controls
    switch( form.name.status ){
      case 'INVALID':
        this.nameError = true;
        document.getElementById('establishmentName').style.borderLeft = '5px solid red';
        break;
      default: 
        this.nameError = false;
        document.getElementById('establishmentName').style.borderLeft = '5px solid green';
        break;
    }
    switch( form.email.status ){
      case 'INVALID':
        this.mailError = true;
        document.getElementById('establishmentEmail').style.borderLeft = '5px solid red';
        break;
      default: 
        this.mailError = false;
        document.getElementById('establishmentEmail').style.borderLeft = '5px solid green';
        break;
    }
    switch( form.imageUrl.status ){
      case 'INVALID':
        this.imageError = true;
        document.getElementById('imageUrl').style.borderLeft = '5px solid red';
        break;
      default:
        this.imageError = false;
        document.getElementById('imageUrl').style.borderLeft = '5px solid green';
        break;
    }
    switch( form.price.status ){
      case 'INVALID':
        this.priceError = true;
        document.getElementById('price').style.borderLeft = '5px solid red';
        break;
      default:
        this.priceError = false;
        document.getElementById('price').style.borderLeft = '5px solid green';
        break;
    }
    switch( form.guests.status ){
      case 'INVALID':
        this.guestError = true;
        document.getElementById('maxGuests').style.borderLeft = '5px solid red';      
        break;
      default:
        this.guestError = false;
        document.getElementById('maxGuests').style.borderLeft = '5px solid green';
        break;
    }
    switch( form.Lat.status ){
      case 'INVALID':
        document.getElementById('googleLat').style.borderLeft = '5px solid red';
        break;
      default: 
        document.getElementById('googleLat').style.borderLeft = '5px solid green';
        break;
      }
    switch( form.Long.status ){
      case 'INVALID':
        document.getElementById('googleLong').style.borderLeft= "5px solid red";
        break;
      default:
        document.getElementById('googleLong').style.borderLeft = '5px solid green';
        break;
    }
    switch( form.description.status ){
      case 'INVALID':
        document.getElementById('description').style.borderLeft = '5px solid red';
        this.descError = true;
        break;
      default:
        document.getElementById('description').style.borderLeft = '5px solid green';
        break;
    }
  }

}
