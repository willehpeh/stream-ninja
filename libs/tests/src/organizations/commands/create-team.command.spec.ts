import { CreateTeamCommand, CreateTeamCommandHandler, CreateTeamDto } from '@stream-ninja/application';
import { InMemoryOrganizationsRepository } from '@stream-ninja/infrastructure';

describe('Create Team', () => {
  let dto: CreateTeamDto;
  let command: CreateTeamCommand;
  let handler: CreateTeamCommandHandler;
  let repository: InMemoryOrganizationsRepository;

  beforeEach(() => {
    repository = new InMemoryOrganizationsRepository();
    repository.testMethods().addEmptyOrg();
    dto = {
      name: 'test team',
      organizationId: repository.organizations[0].id().value(),
    };
    command = new CreateTeamCommand(dto);
    handler = new CreateTeamCommandHandler(repository);
  });

  it('should create one team in the org', async () => {
    await handler.execute(command);
    const org = repository.organizations[0];
    expect(org.snapshot().teams.length).toBe(1);
  });

  it('should throw an error if there is no org with that ID', async () => {
    const badCommand = new CreateTeamCommand({
      name: 'test team',
      organizationId: crypto.randomUUID()
    });
    await expect(() => handler.execute(badCommand)).rejects.toThrow(`Organization with id ${ badCommand.dto.organizationId } not found`);
  });
});
