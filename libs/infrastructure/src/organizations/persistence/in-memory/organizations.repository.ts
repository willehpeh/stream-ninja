import { OrganizationId, OrganizationName, OrganizationsRepository } from '@stream-ninja/domain';
import { Organization } from '@stream-ninja/domain/src/organizations/organization/entities/organization';

export class InMemoryOrganizationsRepository implements OrganizationsRepository {
  public readonly organizations: Organization[] = [];

  async add(organization: Organization): Promise<void> {
    this.organizations.push(organization);
    return Promise.resolve();
  }

  async existsWithName(name: OrganizationName): Promise<boolean> {
    return this.organizations.some(org => org.snapshot().name === name.value());
  }

  async withId(id: OrganizationId): Promise<Organization | undefined> {
    return this.organizations.find(org => org.id().equals(id));
  }

  async updateTeams(org: Organization): Promise<void> {
    const index = this.organizations.findIndex(org => org.id().equals(org.id()));
    this.organizations[index] = org;
  }

  testMethods() {
    return {
      addEmptyOrg: () => this.addEmptyOrg(),
    }
  }

  private addEmptyOrg() {
    const org = Organization.create({
      id: OrganizationId.new(),
      name: new OrganizationName('test'),
    });
    this.organizations.push(org);
  }

}
