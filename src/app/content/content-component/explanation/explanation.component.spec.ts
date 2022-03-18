import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExplanationComponent } from './explanation.component';
import {Answer} from "../../shared/answer/answer.model";
import {Content} from "../../content";

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

    component.explanation = new Content(6, "Je gaat een sterke kop koffie krijgen", "Explanation", [new Answer(9, "Die heb je verdient!")]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('id should be 6', () => {
    expect(component.explanation.id).toBe(6);
  });

  it('value should be "Je gaat een sterke kop koffie krijgen"', () => {
    expect(component.explanation.value).toBe("Je gaat een sterke kop koffie krijgen");
  });

  it('getAnswer() should be equal', () => {
    expect(component.explanation.answers).toEqual([new Answer(9, "Die heb je verdient!")]);
  });
});
