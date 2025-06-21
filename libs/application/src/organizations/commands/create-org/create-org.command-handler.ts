import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOrgCommand } from './create-org.command.js';
import { OrganizationsRepository } from '@stream-ninja/domain';

@CommandHandler(CreateOrgCommand)
export class CreateOrgCommandHandler implements ICommandHandler<CreateOrgCommand> {
  constructor(private readonly organizations: OrganizationsRepository) {
  }

  async execute(command: CreateOrgCommand): Promise<void> {
    return Promise.resolve();
  }
}
