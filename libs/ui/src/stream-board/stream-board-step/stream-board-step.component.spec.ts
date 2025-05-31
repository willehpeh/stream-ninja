import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StreamBoardStepComponent } from './stream-board-step.component';

describe('StreamBoardStepComponent', () => {
  let component: StreamBoardStepComponent;
  let fixture: ComponentFixture<StreamBoardStepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamBoardStepComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StreamBoardStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
