import { Organization } from '../entities';
import { OrganizationId, OrganizationName } from '../value-objects';

export abstract class OrganizationsRepository {
  abstract add(org: Organization): Promise<void>;
  abstract existsWithName(name: OrganizationName): Promise<boolean>;
  abstract withId(id: OrganizationId): Promise<Organization | undefined>;
  abstract updateTeams(org: Organization): Promise<void>;
}
