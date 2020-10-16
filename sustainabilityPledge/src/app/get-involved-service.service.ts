import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInvolvedServiceService {
  name: string;
  email: string;
  phone: string;
  data: Observable<any[]>;

  constructor(private db: AngularFireDatabase) {
    this.data = this.db.list('/Interested in Events/').valueChanges();
   }

  saveInfo(name: string, email: string, phone:string){
    this.db.list('/Interested in Events/').push({
      name: name,
      email: email,
      phone: phone
    });
  }
}
