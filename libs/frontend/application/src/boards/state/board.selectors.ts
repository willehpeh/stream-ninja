import { boardsFeatureKey, BoardState } from './board.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectBoardsFeature = createFeatureSelector<BoardState>(
  boardsFeatureKey
);

export const selectAllBoards = createSelector(
  selectBoardsFeature,
  state => state.boards
);
