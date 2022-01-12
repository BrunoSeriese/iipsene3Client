import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VragenComponent } from './vragen.component';

describe('VragenComponent', () => {
  let component: VragenComponent;
  let fixture: ComponentFixture<VragenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VragenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VragenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
