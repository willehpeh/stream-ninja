import { Entity } from '../../../common';
import { TeamId, TeamName } from '../value-objects';
import { TeamSnapshot } from './team-snapshot';

export class Team implements Entity<TeamId, TeamSnapshot> {

  private readonly _id: TeamId;
  private _name: TeamName;

  constructor(id: TeamId, name: TeamName) {
    this._id = id;
    this._name = name;
  }

  id(): TeamId {
    return this._id;
  }

  snapshot(): TeamSnapshot {
    return {
      id: this._id.value(),
      name: this._name.value(),
    };
  }

}
