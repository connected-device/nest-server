import * as mongoose from 'mongoose';

export const OrganizationSchema = new mongoose.Schema({
  organizationName: String,
  role: String,
  group: String,
  organizationId: String,
  password: String,
});
