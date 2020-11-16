import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../question.service';
import { Result } from '../models/Result';
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
      this.getResults(this.data);
    });
  }

  getPCount(s:string): number{
    return this.resultCount.get(s).getPledge();
  }

  getDPCount(s:string):number{
    return this.resultCount.get(s).getDontPledge();
  }

  getAPCount(s:string):number{
    return this.resultCount.get(s).getAlreadyPledged();
  }

  // Strings must match answer options in db for comparison
  counter(q:string, a:string){
    if(!this.resultCount.has(q)){
      this.resultCount.set(q, new Result());
    }
    if(a == 'I Will Do This'){
      this.resultCount.get(q).setPledge();
    }else if(a == 'Skip'){
      this.resultCount.get(q).setDontPledge();
    }else if(a == 'I Already Do This'){
      this.resultCount.get(q).setAlreadyPledge();
    }
  }

  getResults(data: Pledge[]){
    for(let d of Object.keys(data)){
      let p = data[d];
      for(let r of Object.keys(p)){
        let a = p[r]; //arrays after pledge
        for(let b of Object.keys(a)){
          let c = a[b]; // get attributes
            this.counter(c.question, c.answer);
        }
      }
    }
  }

}
