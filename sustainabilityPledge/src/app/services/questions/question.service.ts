import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Pledge } from '../../models/Pledge';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  progress: number = 0;
  answers: Pledge[] = [];
  data: Observable<any[]>;
  totalQuestions: number = 22;//REPLACE WITH NEW TOTAL IF ADDED QUESTIONS TO JSON
   

  constructor(
    private http: HttpClient,
    private router: Router,
    public db: AngularFireDatabase
  ) {
    this.data = this.db.list('Pledges').valueChanges();
   }

   getTotalQuestions(){
     return this.totalQuestions;
   }

   getProgress(){
     return this.progress;
   }

   getData(){
     return this.data;
   }

   addToAnswers(obj: Pledge){
    this.answers.push(obj);
    this.progress++;
   }

  onSubmit(){
    if(this.progress != this.totalQuestions){
      window.alert('Answer all of the questions before submitting!');
      return;
    }else{
      this.db.list('Pledges').push({
        pledge: this.answers,
        user:  firebase.auth().currentUser.uid,
        dateTaken : firebase.database.ServerValue.TIMESTAMP
      })
      .then(function(docRef) {
        console.log(docRef);
       })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
      this.router.navigate(['/result']);
    }
  }

  getWater(){
    return this.http.get('/assets/water.json');
  }

  getElectricity(){
    return this.http.get('/assets/electricity.json');
  }

  getFood(){
    return this.http.get('/assets/food.json');
  }

  getRecycling(){
    return this.http.get('/assets/recycling.json');
  }

  getTransportation(){
    return this.http.get('/assets/transportation.json');
  }
}
