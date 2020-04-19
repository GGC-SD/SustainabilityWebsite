import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";
import { Result } from "../models/Result";
import { Pledge } from '../models/Pledge';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  data: Pledge[] = [];
  answers: Pledge[];
  resultCount: Map<string, Result> = new Map<string, Result>();
  

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.answers = this.questionService.answers;
    this.questionService.getData().subscribe(data => {
      this.data = data;
      this.getResults();
    })
  }
  getResultCount(s:string): Result{
    return this.resultCount.get(s);
  }

  counter(q:string, a:string){
    if(!this.resultCount.has(q)){
      this.resultCount.set(q, new Result());
    }
    if(a == 'Pledge'){
      this.resultCount.get(q).setPledge();
    }else if(a == 'Do not Pledge'){
      this.resultCount.get(q).setDontPledge();
    }else if(a == 'Already Pledged'){
      this.resultCount.get(q).setAlreadyPledge();
    }
  }

  getResults(){
    for(let d of Object.keys(this.data)){
      var p = this.data[d];
      for(let r of Object.keys(p)){
        var a = p[r]; //arrays after pledge
        for(let b of Object.keys(a)){
          var c = a[b]; // get attributes
            this.counter(c.question, c.answer);
        }
      }
    }  
  }

}
 
