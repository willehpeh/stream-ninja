import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import {
  CreateTeamCommand
} from './create-team.command';

@CommandHandler(CreateTeamCommand)
export class CreateTeamCommandHandler implements ICommandHandler<CreateTeamCommand> {
  execute(command: CreateTeamCommand): Promise<any> {
    return Promise.resolve(undefined);
  }

}
