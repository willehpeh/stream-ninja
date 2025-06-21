import { Organization } from '../entities/organization/organization';
import { OrganizationName } from '../value-objects';

export abstract class OrganizationsRepository {
  abstract add(org: Organization): Promise<void>;
  abstract existsWithName(name: OrganizationName): Promise<boolean>;
}
