export class TeamId {
  private constructor(private readonly _id: string) {
  }

  static new(): TeamId {
    return new TeamId(crypto.randomUUID());
  }

  static fromString(id: string): TeamId {
    if (!this.isValidUuid(id)) {
      throw new Error('Invalid UUID');
    }
    return new TeamId(id);
  }

  equals(other: TeamId): boolean {
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
