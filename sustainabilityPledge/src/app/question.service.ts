import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { TSMap } from "typescript-map";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  progress: number = 0;
  answers = new TSMap<String,String>();

  constructor(
    private http: HttpClient
  ) { }

  toJSON(){
    return this.answers.toJSON();
  }

  setAnswers(q:String, a:String){
    this.answers.set(q,a);
    this.progress = this.answers.size();
  }

  getAnswers(){
    return this.answers;
  }

  getProgress(){
    return this.progress;
  }

  getWater(){
    return this.http.get('/assets/water.json');
  }

  getElectricity(){
    return this.http.get('/assets/electricity.json');
  }
  
  getFood(){
    return this.http.get('/assets/food.json');
  }

  getRecycling(){
    return this.http.get('/assets/recycling.json');
  }

  getTransportation(){
    return this.http.get('/assets/transportation.json');
  }
}
