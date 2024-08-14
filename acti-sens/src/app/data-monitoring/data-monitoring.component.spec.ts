import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataMonitoringComponent } from './data-monitoring.component';

describe('DataMonitoringComponent', () => {
  let component: DataMonitoringComponent;
  let fixture: ComponentFixture<DataMonitoringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DataMonitoringComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DataMonitoringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
