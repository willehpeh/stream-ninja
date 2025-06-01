import { Component, input } from '@angular/core';
import { BoardCardComponent } from '../board-card/board-card.component';

@Component({
  selector: 'app-board-column',
  template: `
    <div>
      <div class="w-3/4 bg-gray-900">
        <h1 class="text-gray-400">{{ title() }}</h1>
      </div>
      <div class="bg-gray-900">
        @for (item of items(); track item) {
          <app-board-card />
        }
      </div>
    </div>
  `,
  imports: [BoardCardComponent],
})
export class BoardColumnComponent {
  title = input.required<string>();
  items = input<string[]>([]);
}
