import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOrgCommand } from './create-org.command.js';

@CommandHandler(CreateOrgCommand)
export class CreateOrgCommandHandler implements ICommandHandler<CreateOrgCommand> {
  async execute(command: CreateOrgCommand): Promise<void> {

  }
}
