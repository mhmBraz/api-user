import {Prop, Schema, SchemaFactory} from '@nestjs/mongoose';
import {Types} from 'mongoose';

@Schema({_id: false})
export class Car {
  @Prop({type: String, required: true})
  plate: string;

  @Prop({type: String, required: true})
  name: string;

  @Prop({type: String, required: true})
  model: string;

  @Prop({type: Date, required: true, default: Date.now})
  createdAt: Date;

  @Prop({type: Date, required: true, default: Date.now})
  updatedAt: Date;

  @Prop({type: Date, required: false, default: null})
  deletedAt: Date;
}

export const CarSchema = SchemaFactory.createForClass(Car);
