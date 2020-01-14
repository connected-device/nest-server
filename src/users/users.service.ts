// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class UsersService {}

import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
// export type User = any;

@Injectable()
export class UsersService {
  private readonly users: User[];
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // async findAll(): Promise<User[]> {
  //     return await this.userModel.find();
  // }

  async findAll(organizationId: string): Promise<User[]> {
    return await this.userModel.find({ organizationId });
  }

  async findOne(id: string): Promise<User> {
    return await this.userModel.findOne({ _id: id });
  }

  // async findOne(username: string): Promise<User | undefined> {
  //   return this.users.find(user => user._ === username);
  // }

  async findByUserId(userId: string): Promise<User> {
    return await this.userModel.find({ userId });
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}
