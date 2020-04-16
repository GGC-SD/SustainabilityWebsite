import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foodQuestion: any;
  numberOfQuestions: number = 2;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.foodQuestion = this.questionService.getFood();
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
