import { BoardDto } from '../dtos/board.dto';
import { createReducer, on } from '@ngrx/store';
import { LoadBoards, LoadBoardsFailure, LoadBoardsSuccess } from './board.actions';

export const boardsFeatureKey = 'boards';

export interface BoardState {
  loading: boolean;
  loaded: boolean;
  boards: BoardDto[];
}

const initialState: BoardState = {
  loading: false,
  loaded: false,
  boards: [],
};

export const boardsReducer = createReducer(
  initialState,
  on(LoadBoards, (state) => ({
    ...state,
    loading: true,
  })),
  on(LoadBoardsSuccess, (state, action) => ({
    ...state,
    loading: false,
    loaded: true,
    boards: action.boardDtos,
  })),
  on(LoadBoardsFailure, (state) => ({
    ...state,
    loading: false,
  }))
);
