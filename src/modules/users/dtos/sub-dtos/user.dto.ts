import {Car} from '../../entities/car.entity';
import {
  IsArray,
  IsDateString,
  IsEmail,
  IsMongoId,
  IsNotEmpty,
  IsString,
  ValidateNested,
} from 'class-validator';
import {Type} from 'class-transformer';
import {CarDto} from './car.dto';

export class UserDto {
  @IsMongoId()
  @IsString()
  @IsNotEmpty()
  _id?: string;

  @IsString()
  @IsNotEmpty()
  login: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsArray()
  @IsNotEmpty()
  @ValidateNested({each: true})
  @Type(() => CarDto)
  cars: Car[];

  @IsDateString()
  @IsNotEmpty()
  createdAt: Date;

  @IsDateString()
  @IsNotEmpty()
  updatedAt: Date;

  @IsDateString()
  deletedAt?: Date;

  constructor(args: UserDto) {
    Object.assign(this, args);
  }
}
