import { inject, Injectable } from '@angular/core';
import { Boards } from '../services/boards';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { LoadBoards, LoadBoardsFailure, LoadBoardsSuccess } from './board.actions';
import { catchError, map, of, switchMap } from 'rxjs';

@Injectable()
export class BoardEffects {
  private boards = inject(Boards);
  private actions$ = inject(Actions);

  loadBoards$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoadBoards),
      switchMap(() => this.boards.all().pipe(
        map((boardDtos) => LoadBoardsSuccess({ boardDtos })),
        catchError((error) => of(LoadBoardsFailure({ error })))
      ))
    )
  );
}
