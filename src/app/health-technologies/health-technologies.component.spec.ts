import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthTechnologiesComponent } from './health-technologies.component';

describe('HealthTechnologiesComponent', () => {
  let component: HealthTechnologiesComponent;
  let fixture: ComponentFixture<HealthTechnologiesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HealthTechnologiesComponent]
    });
    fixture = TestBed.createComponent(HealthTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
