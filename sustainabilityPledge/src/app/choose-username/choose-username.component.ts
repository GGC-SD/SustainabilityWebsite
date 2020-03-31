import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';


@Component({
  selector: 'app-choose-username',
  templateUrl: './choose-username.component.html',
  styleUrls: ['./choose-username.component.css']
})
export class ChooseUsernameComponent implements OnInit {

  constructor(
    public authenticationService:AuthenticationService
    ){
    }
    emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.\[a-z]{2,4}$";
    passwordPattern="(.{8,})";
    

     
    email: string;
    password: string;
     
    signUp() {
    this.authenticationService.SignUp(this.email, this.password);
    this.email = '';
    this.password = '';
    }
     
    signIn() {
      
    this.authenticationService.SignIn(this.email, this.password);
    this.email = '';
    this.password = '';
    
    
    }
     
    signOut() {
    this.authenticationService.SignOut();
    }

  ngOnInit(): void {
  }
  

}
