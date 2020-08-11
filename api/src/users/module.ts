import { UserDbParams } from './schema';
import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersController } from './controller';
import { UsersService } from './service';

@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: UserDbParams.name,
        schema: UserDbParams.schema,
        collection: UserDbParams.collection,
      },
    ]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
