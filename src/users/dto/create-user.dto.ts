import { Document } from 'mongoose';

export class CreateUserDto extends Document {
  readonly username: string;
  readonly password: string;
  readonly role: string;
  readonly organizationId: string;
}
