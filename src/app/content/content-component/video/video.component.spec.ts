import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';
import {Answer} from "../../shared/answer/answer.model";
import {Content} from "../../content";

describe('VideoComponent', () => {
  let component: VideoComponent;
  let fixture: ComponentFixture<VideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoComponent);
    component = fixture.componentInstance;

    component.video = new Content(7, "Een mooie video over koffie", "Video", [new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A")]);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('id should be 7', () => {
    expect(component.video.id).toBe(7);
  });

  it('value should be "Een mooie video over koffie"', () => {
    expect(component.video.value).toBe("Een mooie video over koffie");
  });

  it('getAnswer() should be equal', () => {
    expect(component.video.answers).toEqual([new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A")]);
  });
});
