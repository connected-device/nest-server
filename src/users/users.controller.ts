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
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';

@Controller('users')
export class UsersController {

    constructor(private readonly usersService: UsersService) { }

    @Get()
    findAll(): Promise<User[]> {
        return this.usersService.findAll();
    }

    @Get('findByUserId')
    findByUserId(@Query() query): Promise<User[]> {
        // return this.usersService.find(query);
        return this.usersService.findByUserId(query.userId);
    }

    @Get(':id')
    findOne(@Param('id') id): Promise<User> {
        return this.usersService.findOne(id);
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        return this.usersService.create(createUserDto);
    }

    @Delete(':id')
    delete(@Param('id') id): Promise<User> {
        return this.usersService.delete(id);
    }

    @Put(':id')
    update(@Body() updateUserDto: CreateUserDto, @Param('id') id): Promise<User> {
        return this.usersService.update(id, updateUserDto);
    }
}
