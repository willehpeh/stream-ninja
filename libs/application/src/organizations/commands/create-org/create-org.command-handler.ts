import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOrgCommand } from './create-org.command.js';
import { OrganizationId, OrganizationName, OrganizationsRepository } from '@stream-ninja/domain';
import { Organization } from '@stream-ninja/domain/src/organizations/entities/organization';

@CommandHandler(CreateOrgCommand)
export class CreateOrgCommandHandler implements ICommandHandler<CreateOrgCommand> {
  constructor(private readonly organizations: OrganizationsRepository) {
  }

  async execute({ dto }: CreateOrgCommand): Promise<void> {
    const id = OrganizationId.new();
    const name = new OrganizationName(dto.name);
    const organization = Organization.create({ id, name });
    return this.organizations.add(organization);
  }
}
