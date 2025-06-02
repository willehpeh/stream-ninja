import { createAction, props } from '@ngrx/store';
import { BoardDto } from '../dtos/board.dto';
import { HttpErrorResponse } from '@angular/common/http';

export const LoadBoards = createAction('[Board] Load Boards');
export const LoadBoardsSuccess = createAction(
  '[Board] Load Boards Success',
  props<{ boardDtos: BoardDto[] }>()
);
export const LoadBoardsFailure = createAction(
  '[Board] Load Boards Failure',
  props<{ error: HttpErrorResponse }>()
);
