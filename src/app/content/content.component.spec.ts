import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentComponent } from './content.component';
import {Question} from "./content-component/question/question.model";
import {Answer} from "./shared/answer/answer.model";
import {Explanation} from "./content-component/explanation/explanation.model";
import {Result} from "./content-component/result/result.model";
import {Video} from "./content-component/video/video.model";
import {NextComponent} from "./shared/navigation/next/next.component";
import {PreviousComponent} from "./shared/navigation/previous/previous.component";
import {DebugElement} from "@angular/core";
import {By} from "@angular/platform-browser";

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentComponent, NextComponent, PreviousComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "Question"', () => {
    component.content = new Question(1, "Is koffie lekker?", [
      new Answer(1, "Ja"),
      new Answer(2, "Beetje wel"),
      new Answer(3, "Beetje niet"),
      new Answer(4, "Nee"),
    ]);
    expect(component.getInstance()).toBe("Question");
  });

  it('should return "Explanation"', () => {
    component.content = new Explanation(6, "Je gaat een sterke kop koffie krijgen", new Answer(9, "Die heb je verdient!"));
    expect(component.getInstance()).toBe("Explanation");
  });

  it('should return "Result"', () => {
    component.content = new Result(2, "Je krijgt koffie", new Answer(5, "Je krijgt een sterke kop koffie"));
    expect(component.getInstance()).toBe("Result");
  });

  it('should return "Video"', () => {
    component.content = new Video(7, "Een mooie video over koffie", new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A"));
    expect(component.getInstance()).toBe("Video");
  });

  it('should contain a next button', () => {
    expect(debugElement.query(By.css('#previousButton'))).toBeTruthy();
  });

  it('should contain a previous button', () => {
    expect(debugElement.query(By.css('#nextButton'))).toBeTruthy();
  });
});
