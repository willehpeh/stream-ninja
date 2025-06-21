import { TeamSnapshot } from '../../entities/team';
import { MemberSnapshot } from '../../entities/member';

export type OrganizationSnapshot = {
  members: MemberSnapshot[];
  id: string;
  name: string;
  teams: TeamSnapshot[];
};
