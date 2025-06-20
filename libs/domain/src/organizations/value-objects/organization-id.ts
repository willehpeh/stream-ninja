import { ValueObject } from '../../common';

export class OrganizationId implements ValueObject<string> {

  constructor(private readonly _id: string) {
  }

  equals(other: OrganizationId): boolean {
    return this._id === other._id;
  }

  value(): string {
    return this._id;
  }
}
