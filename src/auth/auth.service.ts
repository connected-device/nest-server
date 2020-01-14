import { Injectable } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
import { User } from '../users/interfaces/user.interface';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}

  async validateUser(userId: string, pass: string): Promise<any> {
    const user: User = await this.usersService.findByUserId(userId);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
