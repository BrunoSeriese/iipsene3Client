import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import {Question} from "./question.model";
import {Answer} from "../../shared/answer/answer.model";
import {AnswerListComponent} from "./answer-list/answer-list.component";
import {ContentComponent} from "../../content.component";
import {AppComponent} from "../../../app.component";

describe('QuestionComponent', () => {
  let component: QuestionComponent;
  let fixture: ComponentFixture<QuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuestionComponent, AnswerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionComponent);
    component = fixture.componentInstance;

    component.question = new Question(1, "Is koffie lekker?", [
      new Answer(1, "Ja"),
      new Answer(2, "Beetje wel"),
      new Answer(3, "Beetje niet"),
      new Answer(4, "Nee"),
    ]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('id should be 1', () => {
      expect(component.question.getId()).toBe(1);
  });

  it('value should be "Is koffie lekker?"', () => {
    expect(component.question.getValue()).toBe("Is koffie lekker?");
  });

  it('size should be 4', () => {
    expect(component.question.getAnswer().length).toBe(4);
  });
});
