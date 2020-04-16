import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";

@Component({
  selector: 'app-recycling',
  templateUrl: './recycling.component.html',
  styleUrls: ['./recycling.component.css']
})
export class RecyclingComponent implements OnInit {

  recyclingQuestion: any;
  numberOfQuestions: number = 2;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.recyclingQuestion = this.questionService.getRecycling();
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
