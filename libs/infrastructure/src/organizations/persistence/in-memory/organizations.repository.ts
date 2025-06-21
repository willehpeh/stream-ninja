import { OrganizationsRepository } from '@stream-ninja/domain';
import { Organization } from '@stream-ninja/domain/src/organizations/entities/organization';

export class InMemoryOrganizationsRepository implements OrganizationsRepository {
  public readonly organizations: Organization[] = [];

  async add(organization: Organization): Promise<void> {
    this.organizations.push(organization);
    return Promise.resolve();
  }
}
