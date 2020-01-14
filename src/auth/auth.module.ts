// import { Module } from '@nestjs/common';

// @Module({})
// export class AuthModule {}

import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UsersModule } from '../users/users.module';
import { AuthService } from './auth.service';

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStrategy],
  //   providers: [AuthService],
  //   providers: [LocalStrategy],
})
export class AuthModule {}
