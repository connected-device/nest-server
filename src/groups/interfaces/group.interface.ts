import { Document } from 'mongoose';
export interface Group extends Document {
  name: string;
  type: string;
  organizationId: string;
}
