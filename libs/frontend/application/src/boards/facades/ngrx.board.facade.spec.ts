import { TestBed } from '@angular/core/testing';
import { NgrxBoardFacade } from './ngrx.board.facade';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideState, provideStore } from '@ngrx/store';
import { API_ROUTES } from '../injection-tokens/API_ROUTES';
import { afterEach, beforeEach, describe, it } from 'vitest';
import { boardsFeatureKey, boardsReducer } from '../state/board.reducer';
import { provideEffects } from '@ngrx/effects';
import { BoardEffects } from '../state/board.effects';
import { Boards } from '../services/boards';
import { createFakeBoardDto } from '../testing/fake-board-dtos';
import { Board } from '@stream-ninja/stream-ninja-frontend-domain';

const DUMMY_API_ROUTES = {
  boardsApi: 'api/boards',
};

describe('NgrxBoardFacade', () => {

  let facade: NgrxBoardFacade;
  let httpCtrl: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NgrxBoardFacade,
        provideHttpClient(),
        provideHttpClientTesting(),
        provideStore(),
        provideState({
          name: boardsFeatureKey,
          reducer: boardsReducer
        }),
        provideEffects([
          BoardEffects
        ]),
        {
          provide: API_ROUTES,
          useValue: DUMMY_API_ROUTES
        },
        Boards,
      ],
    });
    facade = TestBed.inject(NgrxBoardFacade);
    httpCtrl = TestBed.inject(HttpTestingController);
  });

  describe('Given no boards have been loaded', () => {
    describe('When all boards are requested', () => {
      it.each([
        [createFakeBoardDto(0)],
        [createFakeBoardDto(5)]
      ])('should return the boards provided by the API', (response) => {
        const boards = facade.allBoards();
        httpCtrl.expectOne(DUMMY_API_ROUTES.boardsApi).flush(response);
        expect(boards()).toEqual(response.map(dto => new Board(dto.id, dto.name)));
      });
    });
  });

  afterEach(() => {
    httpCtrl.verify();
  });
});
