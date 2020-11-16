import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import {AngularFireDatabase} from '@angular/fire/database';
import { Observable, Subject } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dbData: Observable<any[]>;
  totalPledges: number;

  constructor(public db: AngularFireDatabase) {
    this.db.list('Pledges').valueChanges().subscribe(res => {      
      this.totalPledges = res.length;
    })
   }

  ngOnInit(): void {
    
  }

  getTotal(): number {
    return this.totalPledges;
  }

}
