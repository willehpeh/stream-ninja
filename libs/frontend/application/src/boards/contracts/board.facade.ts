import { Board } from '@stream-ninja/stream-ninja-frontend-domain';
import { Signal } from '@angular/core';

export abstract class BoardFacade {
  abstract allBoards(): Signal<Board[]>;
}
