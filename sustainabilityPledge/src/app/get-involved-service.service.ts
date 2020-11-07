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
  data: Observable<any[]>;

  constructor(private router: Router,private db: AngularFireDatabase) {
    this.data = this.db.list('InterestedInEvents').valueChanges();
   }

  saveInfo(name: string, email: string, phone:string){
    this.db.list('InterestedInEvents').push({
      name: name,
      email: email,
      phone: phone
    }).then(function(docRef) {
      console.log(docRef);
     })
    .catch(function(error) {
      console.error("Error adding document: ", error);
    });
    this.router.navigate(['/home']);
  }
}
