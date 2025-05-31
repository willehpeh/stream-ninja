import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StreamBoardComponent } from './stream-board.component';

describe('StreamBoardComponent', () => {
  let component: StreamBoardComponent;
  let fixture: ComponentFixture<StreamBoardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StreamBoardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StreamBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
