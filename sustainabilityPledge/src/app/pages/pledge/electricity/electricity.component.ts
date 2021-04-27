import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../../../services/questions/question.service";
import { Pledge } from "../../../models/Pledge";

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {

  electricityQuestion: any;
  questionArray: any;
  numberOfQuestions: number;
  showMeList: boolean[];



  constructor(
    private questionService: QuestionService
    ) { }

  ngOnInit(): void {
    this.electricityQuestion = this.questionService.getElectricity();
    this.numberOfQuestions = Object.keys(this.electricityQuestion).length;

    this.showMeList = new Array<boolean> (this.numberOfQuestions);
    this.showMeList[0] = true;
  }

  radioChangeHandler(event: any){
    let obj = new Pledge('electricity', event.target.name, event.target.value);
    let checker = false;
    for(let answer of Object.keys(this.questionService.answers)){
      let a = this.questionService.answers[answer];
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
