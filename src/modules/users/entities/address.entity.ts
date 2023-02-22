import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {HydratedDocument} from 'mongoose';

@Schema()
export class Address {
  _id?: string;

  @Prop({type: String, required: true, unique: true})
  zip_code: string;

  @Prop({type: String, required: true})
  street: string;

  @Prop({type: String, required: true, unique: true})
  number: string;

  @Prop({type: String, required: true, unique: true})
  complement: string;

  @Prop({type: String, required: true, unique: true})
  city: string;

  @Prop({type: String, required: true, unique: true})
  state: string;
}

export type UserDocument = HydratedDocument<Address>;
export const AddressSchema = SchemaFactory.createForClass(Address);
