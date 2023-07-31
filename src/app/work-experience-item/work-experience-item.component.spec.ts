import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkExperienceItemComponent } from './work-experience-item.component';

describe('WorkExperienceItemComponent', () => {
  let component: WorkExperienceItemComponent;
  let fixture: ComponentFixture<WorkExperienceItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WorkExperienceItemComponent]
    });
    fixture = TestBed.createComponent(WorkExperienceItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
