import { TeamSnapshot } from '../team';
import { MemberSnapshot } from '../member';

export type OrganizationSnapshot = {
  members: MemberSnapshot[];
  id: string;
  name: string;
  teams: TeamSnapshot[];
};
