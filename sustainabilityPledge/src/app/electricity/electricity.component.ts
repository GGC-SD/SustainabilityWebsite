import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {

  electricityQuestion: any;
  numberOfQuestions: number = 2;

  constructor(
    private questionService: QuestionService
    ) { }

  ngOnInit(): void {
    this.electricityQuestion = this.questionService.getElectricity();
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
