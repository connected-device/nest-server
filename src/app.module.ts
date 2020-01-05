import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { OrganizationsModule } from './organizations/organizations.module';
import config from './config/keys';

@Module({
    imports: [
        MongooseModule.forRoot(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true }),
        GroupsModule,
        UsersModule,
        OrganizationsModule,
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule { }
