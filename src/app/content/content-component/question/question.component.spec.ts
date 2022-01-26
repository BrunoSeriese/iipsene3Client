import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionComponent } from './question.component';
import {Answer} from "../../shared/answer/answer.model";
import {AnswerListComponent} from "./answer-list/answer-list.component";
import {ContentModel} from "../../content.model";

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

    component.question = new ContentModel(1, "Is koffie lekker?", "Question", [
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
      expect(component.question.id).toBe(1);
  });

  it('value should be "Is koffie lekker?"', () => {
    expect(component.question.value).toBe("Is koffie lekker?");
  });

  it('size should be 4', () => {
    expect(component.question.answers.length).toBe(4);
  });
});
