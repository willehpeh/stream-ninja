import { ValueObject } from '../../common';

export class TeamName implements ValueObject<string> {
  private constructor(private readonly _name: string) {
  }

  equals(vo: TeamName): boolean {
    return this._name === vo._name;
  }

  value(): string {
    return this._name;
  }


}
