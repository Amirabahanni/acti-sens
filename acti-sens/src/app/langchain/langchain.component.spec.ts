import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LangchainComponent } from './langchain.component';

describe('LangchainComponent', () => {
  let component: LangchainComponent;
  let fixture: ComponentFixture<LangchainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LangchainComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LangchainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
