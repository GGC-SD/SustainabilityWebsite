import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../shared/authentication.service';

import { Router } from '@angular/router';





@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;

  constructor(public authenticationService: AuthenticationService,private router: Router) {}

 


  
  ngOnInit(): void {
  }

  

}
