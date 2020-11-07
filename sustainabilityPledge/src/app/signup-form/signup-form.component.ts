import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {

  constructor(public authenticationService: AuthenticationService) { }
  firstName: String;
  lastName: String;
  phone: string;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.\[a-z]{2,4}$";
  passwordPattern = "(.{8,})";
  email: string;
  password: string;
  
  signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
  }



  updateUser(){
    this.authenticationService.UpdateUserData( this.firstName, this.lastName, this.phone)
    this.firstName = '';
    this.lastName = '';
    this.phone = '';
  }


  ngOnInit(): void {
  }

}
