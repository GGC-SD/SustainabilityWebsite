import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";
import { Pledge } from "../models/Pledge";

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {

  waterQuestions: any;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.waterQuestions = this.questionService.getWater();
  }

  radioChangeHandler(event: any){
    let obj = new Pledge('water', event.target.name, event.target.value);
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
