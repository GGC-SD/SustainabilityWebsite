import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";

import {AngularFireDatabase} from '@angular/fire/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

  transportationQuestions: any;
  questionsJSON: any;
  numberOfQuestions: number = 2;
  
  constructor(
    private questionService: QuestionService,
    private router: Router,
    public db: AngularFireDatabase
  ) { }

  ngOnInit(): void {
    this.transportationQuestions = this.questionService.getTransportation();
  }

  radioChangeHandler(event: any){
    let i = 1;
    while(i != this.numberOfQuestions+1){
      if(i == event.target.id){
        this.questionService.setAnswers(event.target.name, event.target.value);
        break;
      }else{
        i++;
      }
    }
  } 

  onSubmit(){
    if(this.questionService.getProgress() != 10){ //<<REPLACE 10 WITH # OF QUESTIONS
      window.alert('Answer all of the questions before submitting!');
      return;
    }else{
      this.questionsJSON = this.questionService.toJSON();
      this.db.list('PledgeQA').push({
        QA: this.questionsJSON
      })
      .then(function(docRef) {
        console.log("File was submitted!");
       })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });
      this.router.navigate(['/result']);
    }
      
  }
}
