import {Module} from '@nestjs/common';
import {User, UserSchema} from '../users/entities';
import {MongooseModule} from '@nestjs/mongoose';
import { LoginController } from './login.controller';

@Module({
  imports: [MongooseModule.forFeature([{name: User.name, schema: UserSchema}])],
  controllers: [LoginController],
})
export class LoginModule {}
