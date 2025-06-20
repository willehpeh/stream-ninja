import { CreateOrgCommand, CreateOrgCommandHandler, CreateOrgDto } from '@stream-ninja/application-ninja';

describe('Create Org', () => {
  let dto: CreateOrgDto;
  let command: CreateOrgCommand;
  let handler: CreateOrgCommandHandler;

  beforeEach(() => {
    dto = {
      name: 'test'
    };
    command = new CreateOrgCommand(dto);
    handler = new CreateOrgCommandHandler();

    handler.execute(command);
  });

  it('should be a placeholder', () => {
    expect(true).toBe(true);
  });
});
