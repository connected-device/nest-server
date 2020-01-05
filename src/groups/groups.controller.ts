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
import { CreateGroupDto } from './dto/create-group.dto';
import { GroupsService } from './groups.service';
import { Group } from './interfaces/group.interface';

@Controller('groups')
export class GroupsController {

    constructor(private readonly groupsService: GroupsService) { }

    // @Get()
    // findAll(): Promise<Group[]> {
    //     return this.groupsService.findAll();
    // }

    @Get()
    findAll(@Query() query): Promise<Group[]> {
        return this.groupsService.findAll(query.organizationId);
    }

    @Get('findByTypeAndName')
    findByGroupId(@Query() query): Promise<Group[]> {
        console.log('query', query);
        return this.groupsService.findByTypeAndName(query.groupId);
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<Group> {
        return this.groupsService.findOne(id);
    }

    @Post()
    create(@Body() createGroupDto: CreateGroupDto): Promise<Group> {
        return this.groupsService.create(createGroupDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<Group> {
        return this.groupsService.delete(id);
    }

    @Put(':id')
    update(@Body() updateGroupDto: CreateGroupDto, @Param('id') id): Promise<Group> {
        return this.groupsService.update(id, updateGroupDto);
    }
}
