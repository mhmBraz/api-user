import {Module} from '@nestjs/common';
import {UsersController} from './users.controller';
import {CreateUserService} from './services';
import {User, UserSchema} from './entities';
import {MongooseModule} from '@nestjs/mongoose';
import {UserRepository} from './repositories';
import {AddCarToUserService} from './services/add-car-to-user.service';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  controllers: [UsersController],
  providers: [UserRepository, CreateUserService, AddCarToUserService],
})
export class UsersModule {}
