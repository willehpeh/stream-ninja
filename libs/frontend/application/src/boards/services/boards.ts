import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { API_ROUTES } from '../injection-tokens/API_ROUTES';
import { BoardDto } from '../dtos/board.dto';

@Injectable()
export class Boards {

  private http = inject(HttpClient);
  private apiRoutes = inject(API_ROUTES);

  all(): Observable<BoardDto[]> {
    return this.http.get<BoardDto[]>(this.apiRoutes.boardsApi);
  }
}
