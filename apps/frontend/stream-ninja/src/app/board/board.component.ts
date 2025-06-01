import { Component, signal } from '@angular/core';
import { BoardColumnComponent } from './board-column/board-column.component';

@Component({
  selector: 'app-board',
  template: `
    <div class="flex mx-auto gap-2">
      @for (column of columns(); track column.title) {
        <app-board-column [title]="column.title" class="flex-grow"/>
      }
    </div>
  `,
  imports: [BoardColumnComponent],
})
export class BoardComponent {
  columns = signal([
    {
      title: 'To Do',
    },
    {
      title: 'Doing',
    },
    {
      title: 'Done',
    },
  ]);
}
