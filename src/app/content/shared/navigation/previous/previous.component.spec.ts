import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PreviousComponent } from './previous.component';
import {By} from "@angular/platform-browser";
import {DebugElement} from "@angular/core";

describe('PreviousComponent', () => {
  let component: PreviousComponent;
  let fixture: ComponentFixture<PreviousComponent>;
  let debugElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PreviousComponent],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviousComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be true', () => {
    expect(component.OnEmptyArray).toBeTruthy();
  });

  it('should have a button', () => {
    expect(debugElement.query(By.css('button'))).toBeTruthy();
  });
});
