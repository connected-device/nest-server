import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { GroupSchema } from './schemas/group.schema';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'Group', schema: GroupSchema }])],
    controllers: [GroupsController],
    providers: [GroupsService]
})
export class GroupsModule { }
