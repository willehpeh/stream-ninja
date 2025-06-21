import { CreateOrgCommand, CreateOrgCommandHandler, CreateOrgDto } from '@stream-ninja/application';
import { InMemoryOrganizationsRepository } from '@stream-ninja/infrastructure';
import { OrganizationId } from '@stream-ninja/domain';

describe('Create Org', () => {
  let dto: CreateOrgDto;
  let command: CreateOrgCommand;
  let handler: CreateOrgCommandHandler;
  let repository: InMemoryOrganizationsRepository;

  beforeEach(() => {
    dto = {
      name: 'test'
    };
    command = new CreateOrgCommand(dto);
    repository = new InMemoryOrganizationsRepository();
    handler = new CreateOrgCommandHandler(repository);
  });

  it('should add one new organization', async () => {
    await handler.execute(command);
    expect(repository.organizations.length).toBe(1);
  });

  it('should add one new organization with correct name', async () => {
    await handler.execute(command);
    expect(repository.organizations[0].snapshot().name).toBe(dto.name);
  });

  it('should add one new organization with a valid ID', async () => {
    await handler.execute(command);
    const validId = OrganizationId.fromString(repository.organizations[0].snapshot().id);
    expect(validId).toBeDefined();
  });
});
