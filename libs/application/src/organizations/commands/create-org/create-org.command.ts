import { CreateOrgDto } from './create-org.dto.js';

export class CreateOrgCommand {
  constructor(public readonly dto: CreateOrgDto) {}
}
