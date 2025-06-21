import { ValueObject } from '../../common';

export class MemberId implements ValueObject<string> {
  private constructor(private readonly _id: string) {
  }

  static new(): MemberId {
    return new MemberId(crypto.randomUUID());
  }

  static fromString(id: string): MemberId {
    if (!this.isValidUuid(id)) {
      throw new Error('Invalid UUID');
    }
    return new MemberId(id);
  }

  equals(vo: MemberId): boolean {
    return this._id === vo._id;
  }

  value(): string {
    return this._id;
  }

  private static isValidUuid(id: string): boolean {
    const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/;
    return uuidRegex.test(id);
  }

}
