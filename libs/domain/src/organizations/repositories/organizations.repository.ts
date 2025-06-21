import { Organization } from '../entities/organization';

export abstract class OrganizationsRepository {
  abstract add(org: Organization): Promise<void>;
}
