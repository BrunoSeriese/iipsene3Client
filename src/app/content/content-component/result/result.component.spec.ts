import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultComponent } from './result.component';
import {Result} from "./result.model";
import {Answer} from "../../shared/answer/answer.model";

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;

    component.result = new Result(3, "Je krijgt koffie", new Answer(6, "Je krijgt een normale kop koffie"));

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('id should be 3', () => {
    expect(component.result.id).toBe(3);
  });

  it('value should be "Je krijgt koffie"', () => {
    expect(component.result.value).toBe("Je krijgt koffie");
  });

  it('getAnswer() should be equal', () => {
    expect(component.result.answers).toEqual([new Answer(6, "Je krijgt een normale kop koffie")]);
  });
});
