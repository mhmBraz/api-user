import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Car, CarSchema} from './car.entity';
import {HydratedDocument} from 'mongoose';
import {Address, AddressSchema} from './address.entity';

@Schema()
export class User {
  _id?: string;

  @Prop({type: String, required: true, unique: true})
  login: string;

  @Prop({type: String, required: true})
  password: string;

  @Prop({type: String, required: true, unique: true})
  email: string;

  @Prop({type: String, required: true, unique: true})
  sex: string;

  @Prop({type: String, required: true, unique: true})
  name: string;

  @Prop({type: String, required: true, unique: true})
  birthDate: string;

  @Prop({type: String, required: true, unique: true})
  cnh: string;

  @Prop({type: String, required: true, unique: true})
  cpf: string;

  @Prop({type: String, required: true, unique: true})
  phone: string;

  @Prop({type: Boolean, required: false, unique: true})
  status: string;

  @Prop({type: String, required: false, unique: true})
  codPassword: string;

  @Prop({type: String, required: false, unique: true})
  expirationCodPassword: string;

  @Prop({type: String, required: false, unique: true})
  photo: string;

  @Prop({type: Date, required: true, default: Date.now})
  createdAt: Date;

  @Prop({type: Date, required: true, default: Date.now})
  updatedAt: Date;

  @Prop({type: Date, required: false, default: null})
  deletedAt: Date;

  @Prop({type: [CarSchema], required: false, default: []})
  cars: Car[];

  @Prop({type: [AddressSchema], required: false, default: []})
  address: Address;
}

export type UserDocument = HydratedDocument<User>;
export const UserSchema = SchemaFactory.createForClass(User);
UserSchema.index({email: 1});
