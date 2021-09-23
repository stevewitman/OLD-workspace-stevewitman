import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubmitComponent } from './admin-submit.component';

describe('AdminSubmitComponent', () => {
  let component: AdminSubmitComponent;
  let fixture: ComponentFixture<AdminSubmitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubmitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubmitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
