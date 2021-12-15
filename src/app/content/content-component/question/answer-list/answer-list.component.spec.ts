import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerListComponent } from './answer-list.component';
import {EventEmitter} from "@angular/core";

describe('AnswerListComponent', () => {
  let component: AnswerListComponent;
  let fixture: ComponentFixture<AnswerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnswerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerListComponent);
    component = fixture.componentInstance;

   component.selectedAnswerEvent.emit(5);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be a eventEmitter when called', () => {
    expect(component.selectedAnswerEvent).toEqual(new EventEmitter<number>())
  });


});
