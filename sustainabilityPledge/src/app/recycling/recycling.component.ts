import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";
import { Pledge } from "../models/Pledge";

@Component({
  selector: 'app-recycling',
  templateUrl: './recycling.component.html',
  styleUrls: ['./recycling.component.css']
})
export class RecyclingComponent implements OnInit {

  recyclingQuestion: any;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.recyclingQuestion = this.questionService.getRecycling();
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
