import { Component } from '@angular/core';
import { BoardComponent } from './board/board.component';

@Component({
  selector: 'app-root',
  template: `
    <app-board />
  `,
  imports: [BoardComponent],
})
export class AppComponent {}
