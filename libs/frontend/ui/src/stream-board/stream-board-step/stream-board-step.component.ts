import { Component, input } from '@angular/core';
import { CdkDrag, CdkDragDrop, CdkDropList } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ninja-stream-board-step',
  template: `
    <div class="border-1 border-gray-500 bg-gray-900 rounded-lg p-3">
      <h2 class="text-xl mb-2">Title</h2>
      <div cdkDropList (cdkDropListDropped)="onDrop($event)">
        @for (item of items(); track item) {
          <div cdkDrag>{{ item }}</div>
        }
      </div>
    </div>
  `,
  imports: [CdkDropList, CdkDrag],
})
export class StreamBoardStepComponent {
  items = input<string[]>([]);
  onDrop($event: CdkDragDrop<null, null, string>) {
    console.log($event.container);
  }
}
