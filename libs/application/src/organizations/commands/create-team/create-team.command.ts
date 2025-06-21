import { CreateTeamDto } from './create-team.dto';

export class CreateTeamCommand {
  constructor(public readonly dto: CreateTeamDto) {}
}
