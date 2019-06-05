import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.scss']
})
export class SigninPageComponent implements OnInit {

  loginForm: FormGroup;
  headerLogo = '../../../assets/logo2.svg';
  loginStatus:boolean = true;

  constructor( 
    private auth: AuthService,
    private router: Router
  ) { 
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl('')
    })
  }

  ngOnInit() {
    if( localStorage.getItem('isSignedIn') === 'true' ){
      this.router.navigate(['admin']);
    }  
  }

  login(formValues:any){
    if( this.auth.login( formValues.username, formValues.password ) ){
      this.loginStatus = true;
      this.auth.startSession();
    } else{
      console.log('Wrong username or password provided');
      this.loginStatus = false;
    }
  }

}
