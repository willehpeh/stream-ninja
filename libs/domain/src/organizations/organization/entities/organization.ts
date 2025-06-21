import { OrganizationId, OrganizationName } from '../../value-objects';
import { Team } from '../../entities/team';
import { Entity } from '../../../common'
import {
  OrganizationSnapshot
} from './organization-snapshot';
import { Member } from '../../entities/member';

export class Organization implements Entity<OrganizationId, OrganizationSnapshot> {
  private readonly _id: OrganizationId;
  private _name: OrganizationName;
  private readonly _teams: Team[] = [];
  private readonly _members: Member[] = [];

  private constructor(id: OrganizationId, name: OrganizationName) {
    this._id = id;
    this._name = name;
  }

  static create(props: { id: OrganizationId, name: OrganizationName }): Organization {
    return new Organization(props.id, props.name);
  }

  id(): OrganizationId {
    return this._id;
  }

  snapshot(): OrganizationSnapshot {
    return {
      id: this._id.value(),
      name: this._name.value(),
      teams: this._teams.map(team => team.snapshot()),
      members: this._members.map(member => member.snapshot())
    };
  }
}
