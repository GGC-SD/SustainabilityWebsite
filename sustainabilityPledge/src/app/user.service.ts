import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/Users/' + user.uid).update({
      email:user.email
    });
  }
}
