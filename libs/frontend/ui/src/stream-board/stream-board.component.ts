import { Component } from '@angular/core';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';
import { StreamBoardStepComponent } from './stream-board-step/stream-board-step.component';

@Component({
  selector: 'ninja-stream-board',
  imports: [CdkDropListGroup, StreamBoardStepComponent],
  template: `
    <h1 class="text-2xl">Stream Board</h1>
    <div cdkDropListGroup class="flex gap-3 w-1/2 min-w-2xl mx-auto">
      @for (step of steps; track step) {
        <ninja-stream-board-step class="flex-grow" [items]="steps"/>
      }
    </div>
  `,
})
export class StreamBoardComponent {
  steps = ['1', '2', '3'];
}
