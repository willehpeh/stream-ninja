import { TeamSnapshot } from '../../team/entities';
import { MemberSnapshot } from '../../member/entities';

export type OrganizationSnapshot = {
  members: MemberSnapshot[];
  id: string;
  name: string;
  teams: TeamSnapshot[];
};
