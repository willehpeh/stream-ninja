import { OrganizationId, OrganizationName } from '../value-objects';
import { Team } from './team';

export class Organization {
  private _id: OrganizationId;
  private _name: OrganizationName;
  private readonly _teams: Team[] = [];

  private constructor(id: OrganizationId, name: OrganizationName) {
    this._id = id;
    this._name = name;
  }

  static create(props: { id: OrganizationId, name: OrganizationName }): Organization {
    return new Organization(props.id, props.name);
  }

  snapshot(): { id: string, name: string, teams: string[] } {
    return {
      id: this._id.value(),
      name: this._name.value(),
      teams: this._teams.map(team => team.toString())
    };
  }
}
