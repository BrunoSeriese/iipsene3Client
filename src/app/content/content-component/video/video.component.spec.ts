import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoComponent } from './video.component';
import {Video} from "./video.model";
import {Answer} from "../../shared/answer/answer.model";

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

    component.video = new Video(7, "Een mooie video over koffie", new Answer(10, "https://www.youtube.com/watch?v=WrZZ_L7rf-A"));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
