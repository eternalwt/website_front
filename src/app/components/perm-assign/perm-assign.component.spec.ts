import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PermAssignComponent } from './perm-assign.component';

describe('PermAssignComponent', () => {
  let component: PermAssignComponent;
  let fixture: ComponentFixture<PermAssignComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PermAssignComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PermAssignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
