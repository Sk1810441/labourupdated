import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabourDetailComponent } from './labour-detail.component';

describe('LabourDetailComponent', () => {
  let component: LabourDetailComponent;
  let fixture: ComponentFixture<LabourDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabourDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabourDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
