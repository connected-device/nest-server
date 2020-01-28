import { Document } from 'mongoose';

export class CreateOrganizationDto extends Document {
  readonly name: string;
  readonly description: string;
}
