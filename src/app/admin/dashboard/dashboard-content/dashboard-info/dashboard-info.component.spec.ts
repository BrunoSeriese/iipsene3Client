import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardInfoComponent } from './dashboard-info.component';
import {RouterTestingModule} from "@angular/router/testing";
import {SharedNodeService} from "../shared-node.service";

describe('DashboardInfoComponent', () => {
  let component: DashboardInfoComponent;
  let fixture: ComponentFixture<DashboardInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ RouterTestingModule ],
      declarations: [ DashboardInfoComponent ],
      providers: [ SharedNodeService ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
