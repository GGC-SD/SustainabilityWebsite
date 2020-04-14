import { Component, OnInit } from '@angular/core';

//
import {AngularFireDatabase} from '@angular/fire/database';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
//

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$";

  user: string = '';
  first: string = '';
  last: string = '';
  email: string = '';
  password: string = '';

  constructor(public db: AngularFireDatabase, private router: Router) {

   }

   onSubmit(){

    this.db.list('pledgers').push({
      username: this.user,
      first: this.first,
      last: this.last,
      email: this.email,
      password: this.password
      });

     this.router.navigate(['/water']);

   }

  ngOnInit(): void {
  }

}
