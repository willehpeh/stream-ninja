import { Organization } from '../entities/organization';

export abstract class OrganizationsRepository {
  abstract create(org: Organization): Promise<void>;
}
