// import { Injectable } from '@nestjs/common';

// @Injectable()
// export class OrganizationsService {}

import { Injectable } from '@nestjs/common';
import { Organization } from './interfaces/organization.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class OrganizationsService {
  constructor(
    @InjectModel('Organization')
    private readonly organizationModel: Model<Organization>,
  ) {}

  async findAll(): Promise<Organization[]> {
    return await this.organizationModel.find();
  }

  async findOne(id: string): Promise<Organization> {
    return await this.organizationModel.findOne({ _id: id });
  }

  // async find(query: object): Promise<Organization[]> {
  //     return await this.organizationModel.find(query);
  // }
  async findByOrganizationId(organizationId: string): Promise<Organization[]> {
    return await this.organizationModel.find({ organizationId });
  }

  async create(organization: Organization): Promise<Organization> {
    const newOrganization = new this.organizationModel(organization);
    return await newOrganization.save();
  }

  async delete(id: string): Promise<Organization> {
    return await this.organizationModel.findByIdAndRemove(id);
  }

  async update(id: string, organization: Organization): Promise<Organization> {
    return await this.organizationModel.findByIdAndUpdate(id, organization, {
      new: true,
    });
  }
}
