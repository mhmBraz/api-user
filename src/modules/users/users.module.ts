import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {CreateUserService} from './services';
import {User, UserSchema} from './entities';
import {MongooseModule} from '@nestjs/mongoose';
import {UserRepository} from './repositories';
import {AddCarToUserService} from './services/add-car-to-user.service';
import { GetUserService } from './services/get-user.service';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  controllers: [UsersController],
  providers: [UserRepository, CreateUserService, AddCarToUserService, GetUserService],
})
export class UsersModule {}
