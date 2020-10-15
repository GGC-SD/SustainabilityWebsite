import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class GetInvolvedServiceService {
  name: string;
  email: string;
  phone: string;

  constructor(private db: AngularFireDatabase) { }

  saveInfo(name: string, email: string, phone:string){
    this.db.object('/Interested in Events/').set({
      name: name,
      email: email,
      phone: phone
    });
  }
}
