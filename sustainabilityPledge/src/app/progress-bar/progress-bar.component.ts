import { Component, OnInit } from '@angular/core';
import { QuestionService } from "../question.service";

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  progress: number;
  totalQuestions: number;

  constructor(
    private questionService: QuestionService
  ) { }

  ngOnInit(): void {
    this.progress = this.questionService.getProgress();
    this.totalQuestions = this.questionService.getTotalQuestions();
  }

}
