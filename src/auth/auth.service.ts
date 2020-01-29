import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { OrganizationsService } from '../organizations/organizations.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly organizationsService: OrganizationsService,
    private readonly jwtService: JwtService,
  ) {}

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
    const user = await this.usersService.findOne(_user.username);
    console.log('user1111', user);
    const organization = await this.organizationsService.findOne(
      _user.organizationId,
    );
    console.log('organization1111', organization);
    const payload = { username: _user.username, sub: _user.userId };
    return {
      username: user.username,
      organizationId: user.organizationId,
      organizationName: organization.name,
      role: user.role,
      token: this.jwtService.sign(payload),
    };
  }
}
