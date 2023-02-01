import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Car, CarSchema} from './car.entity';
import {HydratedDocument} from 'mongoose';

@Schema()
export class User {
  _id?: string;

  @Prop({type: String, required: true, unique: true})
  login: string;

  @Prop({type: String, required: true})
  password: string;

  @Prop({type: String, required: true, unique: true})
  email: string;

  @Prop({type: [CarSchema], required: false, default: []})
  cars: Car[];

  @Prop({type: Date, required: true, default: Date.now})
  createdAt: Date;

  @Prop({type: Date, required: true, default: Date.now})
  updatedAt: Date;

  @Prop({type: Date, required: false, default: null})
  deletedAt: Date;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({email: 1});
