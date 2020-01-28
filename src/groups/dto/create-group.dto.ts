import { Document } from 'mongoose';

export class CreateGroupDto extends Document {
  readonly name: string;
  readonly type: string;
  readonly organizationId: string;
}
