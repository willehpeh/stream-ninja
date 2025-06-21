import { Entity } from '../../../common';
import { MemberId } from '../value-objects';
import { MemberSnapshot } from './member.snapshot';

export class Member implements Entity<MemberId, MemberSnapshot> {

  constructor(private readonly _id: MemberId) {
  }

  id(): MemberId {
    return this._id;
  }

  snapshot(): MemberSnapshot {
    return {
      id: this._id.value()
    };
  }

}
