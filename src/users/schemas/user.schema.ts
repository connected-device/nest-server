import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    userName: String,
    role: String,
    group: String,
    userId: String,
    password: String,
});
