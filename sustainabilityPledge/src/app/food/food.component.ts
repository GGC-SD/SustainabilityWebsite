import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";
import { Pledge} from "../models/Pledge";

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  foodQuestion: any;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.foodQuestion = this.questionService.getFood();
  }

  radioChangeHandler(event: any){
    event.target.checked == 'true'
    let obj = new Pledge('food', event.target.name, event.target.value);
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
