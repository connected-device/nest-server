import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(
        private readonly usersService: UsersService,
        private readonly jwtService: JwtService,
    ) { }

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
            user.password = undefined;
            return user;
        }
        return null;
    }

    async login(_user: any) {
        console.log('_user', _user);
        const payload = { username: _user.username, sub: _user.userId };
        // return {
        //     access_token: this.jwtService.sign(payload),
        //     user,
        // };
        // user["token"] = this.jwtService.sign(payload);
        // return user;

        const user = {
            username: _user.username,
            organizationId: _user.organizationId,
            token: this.jwtService.sign(payload),
        };

        return {
            user,
        };
    }
}
