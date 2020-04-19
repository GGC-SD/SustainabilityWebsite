import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication.service';

import { Router } from '@angular/router';
import { empty } from 'rxjs';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public authenticationService: AuthenticationService,private router: Router) {}

 


  
  ngOnInit(): void {
  }

  

}
