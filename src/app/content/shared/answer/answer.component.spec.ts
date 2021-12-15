import { ComponentFixture, TestBed } from '@angular/core/testing';


import {Answer} from "../../shared/answer/answer.model";


describe('QuestionComponent', () => {
  let component: Answer;
  let fixture: ComponentFixture<Answer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Answer ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Answer);
    component = fixture.componentInstance;



    fixture.detectChanges();
  });


});
