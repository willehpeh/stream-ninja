import { ValueObject } from '../../../common';

export class OrganizationId implements ValueObject<string> {

  private constructor(private readonly _id: string) {}

  static new(): OrganizationId {
    return new OrganizationId(crypto.randomUUID());
  }

  static fromString(id: string): OrganizationId {
    if (!this.isValidUuid(id)) {
      throw new Error('Invalid UUID');
    }
    return new OrganizationId(id);
  }

  equals(other: OrganizationId): boolean {
    return this._id === other._id;
  }

  value(): string {
    return this._id;
  }

  private static isValidUuid(id: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    return uuidRegex.test(id);
  }
}
