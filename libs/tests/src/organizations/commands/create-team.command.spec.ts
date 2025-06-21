import { CreateTeamCommand, CreateTeamCommandHandler, CreateTeamDto } from '@stream-ninja/application';
import { InMemoryOrganizationsRepository } from '@stream-ninja/infrastructure';

describe('Create Team', () => {
  let dto: CreateTeamDto;
  let command: CreateTeamCommand;
  let handler: CreateTeamCommandHandler;
  let repository: InMemoryOrganizationsRepository;

  beforeEach(() => {
    dto = {
      name: 'test team',
      organizationId: 'test-org-id',
    };
    command = new CreateTeamCommand(dto);
    repository = new InMemoryOrganizationsRepository();
    handler = new CreateTeamCommandHandler();
  });

  it('should create', async () => {
    expect(handler).toBeDefined();
  });
});
