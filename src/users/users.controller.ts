import {
    Controller,
    Get,
    Body,
    Request,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from './interfaces/user.interface';
import { AuthService } from '../auth/auth.service';

@Controller('users')
export class UsersController {
    constructor(
        private readonly usersService: UsersService,
        private readonly authService: AuthService,
    ) { }

    @UseGuards(AuthGuard('local'))
    @Post('auth/login')
    async login(@Request() req) {
        // return req.user;
        console.log('req.user', req.user);
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('jwt'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

    @Post()
    create(@Body() createUserDto: CreateUserDto): Promise<User> {
        console.log('createUserDto', createUserDto);
        return this.usersService.create(createUserDto);
    }

    @Get()
    findAll(@Query() query): Promise<User[]> {
        // console.log('findAll');
        return this.usersService.findAll(query.organizationId);
    }

    //   @Get('findByUserId')
    //   findByUserId(@Query() query): Promise<User> {
    //     console.log('findByUserId');
    //     return this.usersService.findByUserId(query.userId);
    //   }
}

// import {
//   Controller,
//   Get,
//   Post,
//   Put,
//   Delete,
//   Body,
//   Param,
//   Query,
//   UseGuards,
//   Request,
// } from '@nestjs/common';
// import { CreateUserDto } from './dto/create-user.dto';
// import { UsersService } from './users.service';
// import { User } from './interfaces/user.interface';
// import { AuthGuard } from '@nestjs/passport';

// @Controller('users')
// export class UsersController {
//   constructor(private readonly usersService: UsersService) {}

//   @UseGuards(AuthGuard('local'))
//   @Post('login')
//   async login(@Request() req) {
//     console.log('login.....', req.body);
//     return req.user;
//   }

//   @Get()
//   findAll(): Promise<User[]> {
//       return this.usersService.findAll();
//   }

//   @Get(':id')
//   findOne(@Param('id') id): Promise<User> {
//     return this.usersService.findOne(id);
//   }

//   @Post()
//   create(@Body() createUserDto: CreateUserDto): Promise<User> {
//     return this.usersService.create(createUserDto);
//   }

//   @Delete(':id')
//   delete(@Param('id') id): Promise<User> {
//     return this.usersService.delete(id);
//   }

//   @Put(':id')
//   update(@Body() updateUserDto: CreateUserDto, @Param('id') id): Promise<User> {
//     return this.usersService.update(id, updateUserDto);
//   }
// }
