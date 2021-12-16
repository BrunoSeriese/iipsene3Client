import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationComponent } from './explanation.component';
import {Explanation} from "./explanation.model";
import {Answer} from "../../shared/answer/answer.model";

describe('ExplanationComponent', () => {
  let component: ExplanationComponent;
  let fixture: ComponentFixture<ExplanationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExplanationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExplanationComponent);
    component = fixture.componentInstance;

    component.explanation = new Explanation(6, "Je gaat een sterke kop koffie krijgen", new Answer(9, "Die heb je verdient!"));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('id should be 6', () => {
    expect(component.explanation.getId()).toBe(6);
  });

  it('value should be "Je gaat een sterke kop koffie krijgen"', () => {
    expect(component.explanation.getValue()).toBe("Je gaat een sterke kop koffie krijgen");
  });

  it('getAnswer() should be equal', () => {
    expect(component.explanation.getAnswer()).toEqual([new Answer(9, "Die heb je verdient!")]);
  });
});
