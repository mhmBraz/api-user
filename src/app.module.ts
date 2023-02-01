import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {MongooseModule} from '@nestjs/mongoose';
import {UsersModule} from './modules/users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({isGlobal: true}),
    MongooseModule.forRoot(process.env.APP_MONGODB_URI),
    UsersModule,
  ],
})
export class AppModule {}

console.log(process.env.APP_MONGODB_URI)
