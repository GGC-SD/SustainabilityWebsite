import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";
import { Pledge } from "../models/Pledge";

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {

  electricityQuestion: any;

  constructor(
    private questionService: QuestionService
    ) { }

  ngOnInit(): void {
    this.electricityQuestion = this.questionService.getElectricity();
  }

  radioChangeHandler(event: any){
    let obj = new Pledge(event.target.id, event.target.name, event.target.value);
    let checker = false;
    for(let answer of Object.keys(this.questionService.answers)){
      var a = this.questionService.answers[answer];
      if(a.question == obj.question){
        checker = true;
      }
    }
    if(checker == false){
      this.questionService.addToAnswers(obj);
    }
    console.log(this.questionService.progress);     
  } 

}
