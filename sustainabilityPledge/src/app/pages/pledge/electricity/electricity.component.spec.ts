import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectricityComponent } from './electricity.component';

import { Pledge } from "../../../models/Pledge";
import { QuestionService } from '../../../services/questions/question.service';

describe('ElectricityComponent', () => {
  let component: ElectricityComponent;
  let fixture: ComponentFixture<ElectricityComponent>;

  let mockQuestionService: jasmine.SpyObj<QuestionService>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElectricityComponent ],

      providers: [ {provide: QuestionService, useValue: mockQuestionService} ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectricityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockQuestionService = TestBed.get(QuestionService);
    let q1: Pledge = new Pledge('electricity', 'test question1', 'Pledge');
    let q2: Pledge = new Pledge('electricity', 'test question2', 'Pledge');
    let q3: Pledge = new Pledge('electricity', 'test question3', 'Already Pledge');
    let q4: Pledge = new Pledge('electricity', 'test question4', 'Do not Pledge');
    mockQuestionService.addToAnswers(q1);
    mockQuestionService.addToAnswers(q2);
    mockQuestionService.addToAnswers(q3);
    mockQuestionService.addToAnswers(q4);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('checks radioChangeHandler() adds new pledge if it doesnt exist', () => {
    const event = {target: {name: 'test question', value: 'Already Pledged'}}
    component.radioChangeHandler(event);
    expect(mockQuestionService.answers.length).toEqual(5);
  });
});
