import { boardsFeatureKey, BoardState } from './board.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Board } from '@stream-ninja/stream-ninja-frontend-domain';

export const selectBoardsFeature = createFeatureSelector<BoardState>(
  boardsFeatureKey
);

export const selectAllBoards = createSelector(
  selectBoardsFeature,
  state => state.boards.map(boardDto => new Board(boardDto.id, boardDto.name))
);
