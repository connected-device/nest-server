import { Injectable } from '@nestjs/common';
import { User } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

// export type User = any;

@Injectable()
export class UsersService {
  // private readonly users: User[];

  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  // constructor() {
  //   this.users = [
  //     {
  //       userId: 1,
  //       username: 'john',
  //       password: 'changeme',
  //     },
  //     {
  //       userId: 2,
  //       username: 'chris',
  //       password: 'secret',
  //     },
  //     {
  //       userId: 3,
  //       username: 'maria',
  //       password: 'guess',
  //     },
  //   ];
  // }

  async findOne(username: string): Promise<User | undefined> {
    // console.log('findOne', username);
    return await this.userModel.findOne({ username: username });
  }

  async create(user: User): Promise<User> {
    const newUser = new this.userModel(user);
    return await newUser.save();
  }

  async findAll(organizationId: string): Promise<User[]> {
    return await this.userModel.find({ organizationId });
  }

  async delete(id: string): Promise<User> {
    return await this.userModel.findByIdAndRemove(id);
  }

  async update(id: string, user: User): Promise<User> {
    return await this.userModel.findByIdAndUpdate(id, user, { new: true });
  }
}

// import { Injectable } from '@nestjs/common';
// import { User } from './interfaces/user.interface';
// import { Model } from 'mongoose';
// import { InjectModel } from '@nestjs/mongoose';

// @Injectable()
// export class UsersService {
//   private readonly users: User[];
//   constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

//   // async findAll(): Promise<User[]> {
//   //     return await this.userModel.find();
//   // }

//   async findOne(id: string): Promise<User> {
//     return await this.userModel.findOne({ _id: id });
//   }

//   // async findOne(username: string): Promise<User | undefined> {
//   //   return this.users.find(user => user._ === username);
//   // }

//   async findByUserId(userId: string): Promise<User> {
//     return await this.userModel.find({ userId });
//   }

//   async create(user: User): Promise<User> {
//     const newUser = new this.userModel(user);
//     return await newUser.save();
//   }

// }
