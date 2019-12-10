import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  Query,
} from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { OrganizationsService } from './organizations.service';
import { Organization } from './interfaces/organization.interface';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly organizationsService: OrganizationsService) {}

  @Get()
  findAll(): Promise<Organization[]> {
    return this.organizationsService.findAll();
  }

  @Get('findByOrganizationId')
  findByOrganizationId(@Query() query): Promise<Organization[]> {
    return this.organizationsService.findByOrganizationId(query.organizationId);
  }

  @Get(':id')
  findOne(@Param('id') id): Promise<Organization> {
    return this.organizationsService.findOne(id);
  }

  @Post()
  create(
    @Body() createOrganizationDto: CreateOrganizationDto,
  ): Promise<Organization> {
    return this.organizationsService.create(createOrganizationDto);
  }

  @Delete(':id')
  delete(@Param('id') id): Promise<Organization> {
    return this.organizationsService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateOrganizationDto: CreateOrganizationDto,
    @Param('id') id,
  ): Promise<Organization> {
    return this.organizationsService.update(id, updateOrganizationDto);
  }
}
