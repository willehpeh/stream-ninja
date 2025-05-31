import { Component } from '@angular/core';
import { CdkDropListGroup } from '@angular/cdk/drag-drop';

@Component({
  selector: 'ninja-stream-board',
  imports: [CdkDropListGroup],
  template: `
    <h1 class="text-2xl">Stream Board</h1>
    <div cdkDropListGroup></div>
  `,
})
export class StreamBoardComponent {}
