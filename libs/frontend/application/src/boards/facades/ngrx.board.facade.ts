import { BoardFacade } from '../contracts/board.facade';
import { inject, Injectable, Signal } from '@angular/core';
import { Board } from '@stream-ninja/stream-ninja-frontend-domain';
import { Store } from '@ngrx/store';
import { selectAllBoards } from '../state/board.selectors';
import { LoadBoards } from '../state/board.actions';

@Injectable()
export class NgrxBoardFacade implements BoardFacade {
  private store = inject(Store);

  allBoards(): Signal<Board[]> {
    this.store.dispatch(LoadBoards());
    return this.store.selectSignal(selectAllBoards);
  }
}
