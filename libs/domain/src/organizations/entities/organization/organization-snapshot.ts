import { TeamSnapshot } from '../team';

export type OrganizationSnapshot = {
  id: string;
  name: string;
  teams: TeamSnapshot[];
};
