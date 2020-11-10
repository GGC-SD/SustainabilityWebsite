import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import * as firebase from 'firebase'
import { Observable } from 'rxjs';
import { AppUser } from './models/app-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private db:AngularFireDatabase) { }

  save(user: firebase.User){
    this.db.object('/Users/' + user.uid).update({
      fullName: user.displayName,
      email:user.email,
      isEmailVerified: user.emailVerified,
      isAdmin: false
    });
  }

  get(uid: String): Observable<AppUser> {
    return this.db.object<AppUser>('/Users/' + uid).valueChanges();
  }

  

  
}
