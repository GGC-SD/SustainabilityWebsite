import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";

@Component({
  selector: 'app-water',
  templateUrl: './water.component.html',
  styleUrls: ['./water.component.css']
})
export class WaterComponent implements OnInit {

  numberOfQuestions: number = 2;
  waterQuestions: any;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.waterQuestions = this.questionService.getWater();
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
  
}
