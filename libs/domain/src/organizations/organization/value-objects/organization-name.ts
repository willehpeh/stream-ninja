import { ValueObject } from '../../../common';

export class OrganizationName implements ValueObject<string> {

  constructor(private readonly _name: string) {
  }

  equals(other: OrganizationName): boolean {
    return this._name === other._name;
  }

  value(): string {
    return this._name;
  }


}
