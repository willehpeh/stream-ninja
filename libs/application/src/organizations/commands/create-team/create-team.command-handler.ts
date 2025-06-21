import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateTeamCommand } from './create-team.command';
import { OrganizationId, OrganizationsRepository, TeamId, TeamName } from '@stream-ninja/domain';

@CommandHandler(CreateTeamCommand)
export class CreateTeamCommandHandler implements ICommandHandler<CreateTeamCommand> {

  constructor(private readonly organizations: OrganizationsRepository) {
  }

  async execute(command: CreateTeamCommand): Promise<void> {
    const orgId = OrganizationId.fromString(command.dto.organizationId);
    const org = await this.organizations.withId(orgId);
    const teamId = TeamId.new();
    const teamName = new TeamName(command.dto.name);
    if (!org) {
      throw new Error(`Organization with id ${ command.dto.organizationId } not found`);
    }
    org.registerTeam(teamId, teamName);
    await this.organizations.updateTeams(org);

    return Promise.resolve();
  }

}
