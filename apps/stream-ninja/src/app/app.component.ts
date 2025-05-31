import { Component } from '@angular/core';
import { StreamBoardComponent } from '@stream-ninja/stream-ninja-ui';

@Component({
  imports: [StreamBoardComponent],
  selector: 'app-root',
  template: `
    <ninja-stream-board />
  `,
})
export class AppComponent {}
