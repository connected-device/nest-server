import { Document } from 'mongoose';
export interface User extends Document {
  username: string;
  password: string;
  role: string;
  organizationId: string;
}
