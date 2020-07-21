import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListLabourComponent } from './list-labour.component';

describe('ListLabourComponent', () => {
  let component: ListLabourComponent;
  let fixture: ComponentFixture<ListLabourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListLabourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListLabourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
