import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateOrgCommand } from './create-org.command.js';
import { OrganizationId, OrganizationName, OrganizationsRepository } from '@stream-ninja/domain';
import { Organization } from '@stream-ninja/domain/src/organizations/organization/entities/organization';

@CommandHandler(CreateOrgCommand)
export class CreateOrgCommandHandler implements ICommandHandler<CreateOrgCommand> {
  constructor(private readonly organizations: OrganizationsRepository) {
  }

  async execute({ dto }: CreateOrgCommand): Promise<string> {
    const name = new OrganizationName(dto.name);
    if (await this.organizations.existsWithName(name)) {
      throw new Error('Organization already exists with same name');
    }
    const id = OrganizationId.new();
    const organization = Organization.create({ id, name });
    await this.organizations.add(organization);
    return organization.id().value();
  }
}
