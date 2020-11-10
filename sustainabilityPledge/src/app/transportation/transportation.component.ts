import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";
import { Pledge } from "../models/Pledge";

@Component({
  selector: 'app-transportation',
  templateUrl: './transportation.component.html',
  styleUrls: ['./transportation.component.css']
})
export class TransportationComponent implements OnInit {

  transportationQuestions: any;
  questionArray: any;
  numberOfQuestions: number;
  showMeList: boolean[];
  
  constructor(
    private questionService: QuestionService,
  ) { }

  ngOnInit(): void {
    this.transportationQuestions = this.questionService.getTransportation();
    this.numberOfQuestions = Object.keys(this.transportationQuestions).length;

    this.showMeList = new Array<boolean> (this.numberOfQuestions);
    this.showMeList[0] = true;
  }

  radioChangeHandler(event: any){
    let obj = new Pledge('transportation', event.target.name, event.target.value);
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

  onSubmit(){
    this.questionService.onSubmit();
  }

}
