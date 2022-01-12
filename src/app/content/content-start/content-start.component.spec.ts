import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentStartComponent } from './content-start.component';

describe('ContentStartComponent', () => {
  let component: ContentStartComponent;
  let fixture: ComponentFixture<ContentStartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentStartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentStartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
