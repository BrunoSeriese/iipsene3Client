import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ContentComponent } from './content.component';
import {Answer} from "./shared/answer/answer.model";
import {NextComponent} from "./shared/navigation/next/next.component";
import {PreviousComponent} from "./shared/navigation/previous/previous.component";
import {DebugElement} from "@angular/core";
import {Content} from "./content";

describe('ContentComponent', () => {
  let component: ContentComponent;
  let fixture: ComponentFixture<ContentComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentComponent, NextComponent, PreviousComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentComponent);
    component = fixture.componentInstance;
    component.content = new Content(1, "", "", []);
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return "Question"', () => {
    component.content = new Content(1, "Is koffie lekker?", "Question",[
      new Answer(1, "Ja"),
      new Answer(2, "Beetje wel"),
      new Answer(3, "Beetje niet"),
      new Answer(4, "Nee"),
    ]);
    expect(component.content.type).toBe("Question");
  });

  it('should return "Explanation"', () => {
    component.content = new Content(6, "Je gaat een sterke kop koffie krijgen", "Explanation", [new Answer(9, "Die heb je verdient!")]);
    expect(component.content.type).toBe("Explanation");
  });

  it('should return "Result"', () => {
    component.content = new Content(2, "Je krijgt koffie", "Result", [new Answer(5, "Je krijgt een sterke kop koffie")]);
    expect(component.content.type).toBe("Result");
  });

  it('should return "Video"', () => {
    component.content = new Content(7, "Een mooie video over koffie", "Video", [new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A")]);
    expect(component.content.type).toBe("Video");
  });
});
