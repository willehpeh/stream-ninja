import { BoardDto } from '../dtos/board.dto';
import { faker } from '@faker-js/faker';

export const createFakeBoardDto = (total: number): BoardDto[] => {
  return Array.from({ length: total }, (): BoardDto => ({
    id: crypto.randomUUID(),
    name: `${ faker.hacker.adjective() } ${ faker.hacker.noun() }`
  }));
};
