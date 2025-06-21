import { CreateOrgCommand, CreateOrgCommandHandler, CreateOrgDto } from '@stream-ninja/application';
import {
  InMemoryOrganizationsRepository
} from '@stream-ninja/infrastructure/src/organizations/persistence/in-memory/organizations.repository';

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

    handler.execute(command);
  });

  it('should be a placeholder', () => {
    expect(true).toBe(true);
  });
});
