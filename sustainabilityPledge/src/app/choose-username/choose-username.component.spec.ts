import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseUsernameComponent } from './choose-username.component';

describe('ChooseUsernameComponent', () => {
  let component: ChooseUsernameComponent;
  let fixture: ComponentFixture<ChooseUsernameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseUsernameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseUsernameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
