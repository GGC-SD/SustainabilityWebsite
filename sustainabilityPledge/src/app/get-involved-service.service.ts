import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pledge } from './models/Pledge';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
@Injectable({
  providedIn: 'root'
})
export class GetInvolvedServiceService {
  name: string;
  email: string;
  phone: string;
  

  constructor(private router: Router,private db: AngularFireDatabase) {
    
   }

  create(GetInvolvedUser){
    this.db.list('/InterestedInEvents').push(GetInvolvedUser)
    .then(function(docRef) {
      console.log(docRef);
     })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
    alert('Thank You for your interest! You will hear from SIOS for future events.' );
    this.router.navigate(['/home']);
  }
}
